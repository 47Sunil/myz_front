import styled from "styled-components";
import NegativeRadius from "../../../assets/svg/NegativeRadius";

const Card = styled.div`
  background: ${(props) =>
    `linear-gradient(108.46deg, ${props.primary} 9.32%, ${props.secondary} 95.41%)`};
`;
const Overlay = styled.div`
  background: ${(props) => `url(${props.asset})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top center;
`;

const PlanOffers = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-5 mt-5">
        {data.map((item) => {
          return (
            <Card
              className="h-56 rounded-xl"
              primary={item.primaryColor}
              secondary={item.secondaryColor}
            >
              <Overlay
                className="h-full flex flex-col justify-between items-center"
                asset={item.asset}
              >
                <div className="w-full">
                  <div
                    className="text-[80px] font-bold text-center -mt-4"
                    style={{ color: item.color }}
                  >
                    {item.headline}
                  </div>
                  <div className="text-[24px] font-medium text-center -mt-7">
                    {item.subheadline}
                  </div>
                </div>
                <div
                  className="text-white w-48 text-center p-2 rounded-t-xl relative"
                  style={{ background: item.accentColor }}
                >
                  {item.price}
                  <NegativeRadius
                    className="absolute right-full bottom-0"
                    color={item.accentColor}
                    value="12"
                    angle="bottom"
                  />
                  <NegativeRadius
                    className="absolute left-full bottom-0"
                    color={item.accentColor}
                    value="12"
                    angle="left"
                  />
                </div>
              </Overlay>
            </Card>
          );
        })}
      </div>
    </>
  );
};

const data = [
  {
    headline: "5 + 1",
    subheadline: "Months Offer",
    price: "Rs. 4,999/-",
    asset:
      "https://res.cloudinary.com/lpmaker/image/upload/v1684493377/subscription%20page/asset1bg_yi4svk.png",
    link: "#",
    primaryColor: "#FF6B00",
    secondaryColor: "#FFBB71",
    accentColor: "#AA4D09",
    color: "#FF6B00",
  },
  {
    headline: "10 + 2",
    subheadline: "Months Offer",
    price: "Rs. 9,999/-",
    asset:
      "https://res.cloudinary.com/lpmaker/image/upload/v1684493500/subscription%20page/asset2b_tcukoe.png",
    link: "#",
    primaryColor: "#FF3939",
    secondaryColor: "#EB05FF",
    accentColor: "#A30980",
    color: "#B21616",
  },
];
export default PlanOffers;
