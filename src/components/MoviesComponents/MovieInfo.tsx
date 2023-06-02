import React, {FC, useEffect} from 'react';
import {Link} from "react-router-dom";

import {getBackDrop, getPoster} from "../../constants";
import {IGenres, IMovieDetails} from "../../interfaces";
import css from '../../styles/MovieInfo.module.css';
import {PosterPreview} from "../PosterPreview";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux/slice";


interface IProps {
    movieDetails: IMovieDetails;
    backDropPath: IMovieDetails;
    lnk: string;
}

const MovieInfo: FC<IProps> = ({movieDetails, lnk}) => {


    const {video, loading} = useAppSelector(state => state.movieReducer);

    const dispatch = useAppDispatch();

    const {
        original_title, overview, poster_path, genres, tagline, vote_average,
        status, title, release_date, backdrop_path, id
    } = movieDetails;



    useEffect(() => {

        dispatch(movieActions.getVideos(id))
    }, [dispatch, id]);


    let genresArr: IGenres[] = [];
    genres.map(item => genresArr.push(item));
    const vote_av: any = vote_average;

    return (

        <>
            {loading === true ? <h1 className={css.loading}>loading...</h1> :
                <div className={css.wrapper}
                     style={backdrop_path ? {backgroundImage: `url(${getBackDrop + backdrop_path})`} :
                         {backgroundImage: `url(${getBackDrop + poster_path})`}}>

                    <div className={css.background_filter}>

                        <div className={css.container}>

                            <div className={css.poster}>

                                <img className={css.img} src={getPoster + poster_path} alt="poster"/>

                            </div>

                            <div className={css.content}>

                                <div className={css.title_container}>
                                    <div className={css.title}><h1>{title}</h1></div>
                                    <div className={css.tag_line}>
                                        <h2>{tagline}{original_title}</h2>
                                    </div>
                                </div>

                                <div className={css.rating_container}>

                                    <div>{vote_average}</div>

                                    <div className={css.ratingD}>

                                        <div className={css.rating_bodyD}>
                                            <div className={css.rating_activeD}
                                                 style={{width: vote_av / 0.1 + '%'}}></div>
                                        </div>

                                    </div>
                                </div>


                                <div className={css.genres}>
                                    {
                                        genresArr.map(genre =>

                                            <div key={genre.id} className={css.genre_item}>
                                                <Link className={css.genre_item} to={`/genres/${genre.name}`}
                                                      state={{...genre}}>
                                                    {genre.name}
                                                </Link>
                                            </div>
                                        )
                                    }
                                </div>

                                <div className={css.video} style={{background: getPoster + poster_path}}>

                                    <iframe width="560" height="315" className={css.iframe}
                                            src={video[0] ? `https://www.youtube.com/embed/${video[0].key}` : getPoster + poster_path}
                                            scrolling="no"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                    >
                                    </iframe>

                                    {
                                        lnk && (
                                            <iframe id="pre" width="560" height="315" className={css.iframe}
                                                    src={lnk[1]}
                                                    frameBorder="0" allowFullScreen>

                                            </iframe>
                                        )
                                    }

                                </div>


                                <div className={css.overview_container}>
                                    <div className={css.status}>status: <h3>{status}</h3> year: <h3>{release_date}</h3>
                                    </div>
                                    <div className={css.overview}>{overview}</div>
                                </div>


                            </div>

                        </div>

                    </div>
                    <PosterPreview poster={poster_path}/>
                </div>}
        </>
    );
};


export {MovieInfo}