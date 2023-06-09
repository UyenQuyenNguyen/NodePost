import Sidebar from "../components/sidebar";
import Story from "../components/Home/stories";
import { Box } from "@mui/material"
import NewFeed from "../components/Home/newfeed";
const Home = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: {
                xs: 'column',
                ms: 'row'
            }
        }}>
            <Sidebar />
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Story />
                <NewFeed />
            </div>
        </Box>
    )
}

export default Home