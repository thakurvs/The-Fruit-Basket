import FruitBasketImg from '../../assets/the-fruit-basket.jpg'

const Logo = () => {
    return (
      <div className="text-2xl flex  items-center gap-2 font-bold uppercase">
        <p className=" text-primary">
          The Fruit <span className="text-secondary">Basket</span>
        </p>
        <img
        src={FruitBasketImg}
        className="h-10 w-10"
        alt="The Fruit Basket Logo"
        />
      </div>
    );
  };
  
  export default Logo;