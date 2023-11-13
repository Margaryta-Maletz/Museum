import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

function CardContainer({cardData}) {
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

CardContainer.propTypes = {
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
export default CardContainer;