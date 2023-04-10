import PropTypes from 'prop-types';

export const RecipeCard = ({ item: { name, time, servings, calories, image, difficulty } }) => {
    return (<div>
        <img src={image} alt={name} width="240" />
        <p>{name}</p>
        <div style={{display: "flex", gap: 8 }}>
            <div>
            <span>Icon</span>
            <div>Time {time} min</div>
        </div>
        <div>
            <span>Icon</span>
            <div>{servings} servings</div>
        </div>
        <div>
            <span>Icon</span>
            <div>{calories} calories</div>
        </div>
        </div>
        <div>
            <h3>Difficulty</h3>
            <div>
                <span>Easy</span>
                <span>Medium</span>
                <span>Hard</span>
            </div>
        </div>
    </div>

    );
};

RecipeCard.prototype = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        time: PropTypes.number.isRequired,
        servings: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        difficulty: PropTypes.oneOf(["easy", "medium", "hard"]).isRequired,
    }).isRequired,
};
