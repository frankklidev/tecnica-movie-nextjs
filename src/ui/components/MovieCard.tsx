import React from 'react'; 
import Link from 'next/link';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Movie } from '../../core/entities/Movie';

import styles from '../../styles/MovieCard.module.css';

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  const limitedOverview = movie.overview.length > 120 ? movie.overview.substring(0, 117) + '...' : movie.overview;

  return (
    <Link href={`/movie/${movie.id}`} passHref>
      <Card 
        component="a" 
        key={movie.id} 
        className={styles.card}>
        
        {movie.poster_path && (
          <CardMedia
            className={styles.cardMedia}
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            title={movie.title}
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h6" component="div"> 
            {movie.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p"> 
            {limitedOverview}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

export default MovieCard;
