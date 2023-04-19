import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AiOutlineClockCircle,
  AiOutlinePieChart,
  AiOutlineBarChart,
} from 'react-icons/ai';
import { HiTrash, HiZoomIn } from 'react-icons/hi';
import {
  InfoBlock,
  Name,
  RecipeInfo,
  BadgeList,
  Badge,
  Actions,
  Image,
  Container,
  Meta,
} from './RecipeCard.styled';
import { RecipeDifficulty } from 'constants';

import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export class RecipeCard extends Component {
  state = {
    selectedImg: null,
  };

  setSelectedImg = () => {
    this.setState({ selectedImg: this.props.item.image });
  };

  closeModal = () => {
    this.setState({ selectedImg: null });
  };

  render() {
    const { selectedImg } = this.state;
    const {
      item: { id, image, name, time, servings, calories, difficulty },
      onDelite,
    } = this.props;
    return (
      <Container>
        <Image src={image} alt={name} width="240" />
        <Meta>
          <Name>{name}</Name>

          <RecipeInfo>
            <InfoBlock>
              <AiOutlineClockCircle size="24" />
              <span>{time} min</span>
            </InfoBlock>
            <InfoBlock>
              <AiOutlinePieChart size="24" />
              <span>{servings} servings</span>
            </InfoBlock>
            <InfoBlock>
              <AiOutlineBarChart size="24" />
              <span>{calories} calories</span>
            </InfoBlock>
          </RecipeInfo>

          <BadgeList>
            <Badge
              active={difficulty === RecipeDifficulty.easy}
              type={RecipeDifficulty.easy}
            >
              Easy
            </Badge>
            <Badge
              active={difficulty === RecipeDifficulty.medium}
              type={RecipeDifficulty.medium}
            >
              Medium
            </Badge>
            <Badge
              active={difficulty === RecipeDifficulty.hard}
              type={RecipeDifficulty.hard}
            >
              Hard
            </Badge>
          </BadgeList>
          <Actions>
            <button aria-label="Delete" onClick={() => onDelite(id)}>
              <HiTrash />
            </button>
            <button aria-label="Zoom" onClick={this.setSelectedImg}>
              <HiZoomIn />
            </button>
          </Actions>
        </Meta>
        <Modal
          isOpen={selectedImg !== null}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>
            <img src={selectedImg} alt="nyam nyam" width="640px" />
            <button onClick={this.closeModal}>Close</button>
          </div>
        </Modal>
      </Container>
    );
  }
}

RecipeCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  }).isRequired,
};
