import ChooseGameBox from './ChooseGameBox';

const GameSelection: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-amber-100 to-amber-300 p-4">
      <ChooseGameBox 
        gameName="Guess The Price"
        gameLink="/games/guess-the-price"
        gameEmoji='💎'
        gameDescription='Guess the price of antiques and vintage items'
      />
        <ChooseGameBox 
        gameName="Item Ranking"
        gameLink="/games/bytt-ar-bytt"
        gameEmoji='💎'
        gameDescription='Rank 10 antique or vintage items by worth'
      />
    </div>
  );
};

export default GameSelection;