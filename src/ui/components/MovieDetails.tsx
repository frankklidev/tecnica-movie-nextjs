import Link from 'next/link';
import { useRouter } from 'next/router';
import useGenres from '@/hooks/useGeneres';
import { Card, CardMedia, CardContent, Typography, Grid, Button } from '@mui/material';
import styles from '../../styles/MovieDetails.module.css'; 
import { MovieDetailsProps } from '@/core/entities/MovieDetailsProps';



const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  const router = useRouter();
  const { genres, loading: genresLoading } = useGenres();

  if (!movie || genresLoading) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <Grid item xs={12} sm={6} md={4}>
        <Link href={`/movie/${movie.id}`} passHref>
          <Card className={styles.movieCard}>
            {movie.poster_path && (
              <CardMedia
                className={styles.movieImage}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                title={movie.title}
              />
            )}
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {movie.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {movie.release_date}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {movie.genre_ids
                  ?.map(genreId => genres.find(genre => genre.id === genreId)?.name)
                  .filter(name => !!name)
                  .join(', ')}
              </Typography>
              <Typography variant="body1" color="textPrimary" component="p">
                {movie.overview}
              </Typography>
            </CardContent>
          </Card>
        </Link>
        <Button className={styles.backButton} variant="outlined" onClick={() => router.back()}>Volver atrás</Button>
      </Grid>
    </div>
  );
}

export default MovieDetails;
