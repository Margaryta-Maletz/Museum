import Card from "@mui/material/Card";
import {CardContent, CardHeader, CardMedia} from "@mui/material";
import {useParams} from "react-router-dom";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import NotFound from "../not-found/not-found.jsx";

function CardDetails({cardData}) {
    const { id } = useParams();
    const card = cardData.find((card) => card.id === Number(id));

    if (!card) {
        return <NotFound />;
    }

    return (
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
    );
}

CardDetails.propTypes = {
    cardData: PropTypes.arrayOf(
        PropTypes.shape({
        "id": PropTypes.number,
        "author": PropTypes.string,
        "imageLink": PropTypes.string,
        "title": PropTypes.string,
        "price": PropTypes.number,
        "description": PropTypes.string,
    }))
}
export default CardDetails;