import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
export const StoryContext = createContext(null);

const storyAPI = 'https://64358af8537112453fd93d8c.mockapi.io/projects'

const initialState = {
    isLoading: false,
    isError: false,
    stories: [],
    isSingleLoading: false,
    singleStory: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };
        case "SET_STORY_DATA":
            return {
                ...state,
                isLoading: true,
                stories: action.payload,
            }
        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case "SET_SINGLE_STORY_LOADING":
            return {
                ...state,
                isSingleLoading: true,
            }
        case "SET_SINGLE_STORY":
            return {
                ...state,
                isSingleLoading: false,
                singleStory: action.payload,
            }
        case "SET_SINGLE_STORY_ERROR":
            return {
                ...state,
                isSingleLoading: false,
                isError: true
            }
        default:
            return state;
    }
}

export const StoryProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const getStories = async (storyAPI) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await axios.get(storyAPI);
            const stories = await res.data;
            dispatch({ type: "SET_STORY_DATA", payload: stories });
        } catch (err) {
            dispatch({ type: "API_ERROR" })
        }
    }

    const getSingleStory = async (stories) => {
        dispatch({ type: "SET_SINGLE_STORY_LOADING" })
        try {
            const res = await axios.get(stories);
            const singleStory = await res.data;
            dispatch({ type: "SET_SINGLE_STORY", payload: singleStory[0] })
        } catch (error) {
            dispatch({ type: "SET_SINGLE_STORY_ERROR" })
        }
    }

    useEffect(() => {
        getStories(storyAPI);
    },[])

    return <StoryContext.Provider value={{ ...state, getSingleStory }}>
        {children}
    </StoryContext.Provider>

}