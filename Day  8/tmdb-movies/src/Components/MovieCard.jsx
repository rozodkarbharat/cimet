import React, { useContext } from 'react'
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Box, Chip, CircularProgress } from '@mui/joy';
import { Moviescontext } from '../index';


function GetGeneresfromId(genres, id) {
  let filteredGenre = genres.filter((elem) => elem.id == id)
  return filteredGenre.length > 0 && filteredGenre[0].name ? filteredGenre[0].name : ""
}


const MovieCard = ({ movie, showChip = false}) => {
  let { genres } = useContext(Moviescontext)

  return (
    <Card sx={{ width: "80%", cursor: "pointer", marginBottom: "30px" }}>

      <Card sx={{ minHeight: '260px', maxWidth: "90%" }}    >
        <CardCover>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            srcSet={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            loading="lazy"

            alt="Image Not Available"
          />
        </CardCover>
        <CardCover
          sx={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
          }}
        />
        <CardContent sx={{ justifyContent: 'flex-end' }}>
          < Box sx={{ display: "flex", gap: 1, justifyContent: "right" }}>

            {showChip && <>
              <Chip variant="solid" color="danger" onClick={function () { }} >{GetGeneresfromId(genres, movie.genre_ids[0])}</Chip>
              {movie.genre_ids[1] && <Chip variant="solid" color="danger" onClick={function () { }} >{GetGeneresfromId(genres, movie.genre_ids[1])}</Chip>}

            </>
            }
          </Box>
        </CardContent>
      </Card>
      <CircularProgress sx={{ marginTop: "-40px", background: "#fff", marginLeft: "10px", '--CircularProgress-size': '50px', display: "absolute", zIndex: 1 }} size="md" determinate value={movie.vote_average * 10}>
        <Typography color='primary'>{parseFloat(movie.vote_average).toFixed(1)}</Typography>
      </CircularProgress>

      <Typography level="title-lg" textColor="black">
        {movie.title || movie.name}
      </Typography>
      <Typography sx={{ color: "gray", fontSize: "14px", margin: 0 }} textColor="black">
        {movie.release_date || movie.first_air_date}
      </Typography>
    </Card>
  )
}

export default MovieCard