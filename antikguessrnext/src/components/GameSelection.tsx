import ChooseGameBox from './ChooseGameBox';

const GameSelection: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <ChooseGameBox 
        gameName="Gissa Priset"
        gameLink="/spel/val"
        gameEmoji='💎'
        gameDescription='Gissa priset på vintage och antika föremål'
      />
        <ChooseGameBox 
        gameName="Bytt Är Bytt"
        gameLink="/spel/bytt-ar-bytt"
        gameEmoji='💎'
        gameDescription='Rangordna 10 föremål baserat på värde'
      />
    </div>
  );
};

export default GameSelection;