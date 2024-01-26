import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharactersByHero = ({alter_ego, characters}) => {
    return alter_ego === characters ? <></> : <p>{characters}</p>;
}

CharactersByHero.propTypes = {
    alter_ego: PropTypes.string.isRequired,
    characters: PropTypes.string.isRequired
}

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters
}) => {

    const heroImageUrl = `/heroes/${id}.jpg`;

    /* const charactesByHero = (<p>{characters}</p>); */

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={ heroImageUrl } className="card-img" alt={ superhero } />
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className='card-title'>{superhero}</h5>
                            <p className='card-text'>{alter_ego}</p>

                            {/* {
                                (alter_ego !== characters) && (charactesByHero)
                                (alter_ego !== characters) && (<p>{characters}</p>)
                            } */}

                            <CharactersByHero alter_ego={alter_ego} characters={characters}/>

                            <p className='card-text'>
                                <small className='text-muted'>{first_appearance}</small>
                            </p>

                            <Link to={`/hero/${id}`}>Más...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

HeroCard.propTypes = {
    id: PropTypes.string.isRequired,
    superhero: PropTypes.string.isRequired,
    alter_ego: PropTypes.string.isRequired,
    first_appearance: PropTypes.string.isRequired,
    characters: PropTypes.string.isRequired
}

