import {Box, Card, CardHeader, CardMedia} from "@mui/material";
import {Link} from "react-router-dom";

const Home = ({cardData}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                mt: 4,
                mx: 2,
                gap: 2,
            }}
        >
            {cardData.map((data) => (
                <Card key={data.id} sx={{ maxWidth: 345 }}>
                    <Link to={`/card/${data.id}`} style={{ textDecoration: 'none' }}>
                        <CardHeader title={data.title} subheader={data.author} />
                        <CardMedia
                            component="img"
                            height="150"
                            image={data.imageLink}
                            alt={`${data.title} image`}
                        />
                    </Link>
                </Card>
            ))}
        </Box>
    );
}

export default Home;