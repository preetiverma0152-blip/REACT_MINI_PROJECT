import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import "./InfoBox.css";

import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";

export default function InfoBox({ info }) {
    const HOT_URL =
        "https://tse1.mm.bing.net/th/id/OIP.CZ6A1jLXFyLWFFTHog_CRgAAAA?r=0&pid=Api&h=220&P=0";

    const COLD_URL =
        "https://images.unsplash.com/photo-1763202364467-9a420f6d2325?w=500&auto=format&fit=crop&q=60";

    const RAIN_URL =
        "https://images.unsplash.com/photo-1763633924258-08d677983940?w=500&auto=format&fit=crop&q=60";

    const isRainy = info.humidity > 80;
    const isHot = info.temp > 15;

    const imageUrl = isRainy
        ? RAIN_URL
        : isHot
        ? HOT_URL
        : COLD_URL;

    const WeatherIcon = isRainy
        ? ThunderstormIcon
        : isHot
        ? SunnyIcon
        : AcUnitIcon;

    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt={`Weather in ${info.city}`}
                        height="140"
                        image={imageUrl}
                    />

                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                        >
                            {info.city} <WeatherIcon />
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                            component="div"
                        >
                            <p>
                                Temperature = {info.temp}&deg;C
                            </p>

                            <p>
                                Humidity = {info.humidity}%
                            </p>

                            <p>
                                Min Temp = {info.tempMin}&deg;C
                            </p>

                            <p>
                                Max Temp = {info.tempMax}&deg;C
                            </p>

                            <p>
                                The weather can be described as{" "}
                                <i>{info.weather}</i> and feels like{" "}
                                {info.feelslike}&deg;C
                            </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
