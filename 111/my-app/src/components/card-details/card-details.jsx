import {Link, useParams} from "react-router-dom";
import ErrorPage from "../error-page/about.jsx";
import {Box, Card, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";

const CardDetails = (props) => {
    const { cardData } = props;
    const { id } = useParams();
    const card = cardData.find((card) => card.id === Number(id));

    if (!card) {
        return <ErrorPage />
    }

    return (
        <Box>
            <Card sx={{ maxWidth: 800}}>
                <CardHeader
                    title={card.title}
                    subheader={card.author}
                />
                <CardMedia
                    style={{ maxWidth: "300px", margin: "0 auto"}}
                    component="img"
                    image={card.imageLink}
                    alt={`${card.title} image`}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {card.description}
                    </Typography>
                </CardContent>
            </Card>
            <Link to={`/`}>home</Link>
        </Box>
    );
}

export default CardDetails;