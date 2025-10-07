import React from "react";
import type { IconType } from "react-icons";
import { TiBatteryHigh } from "react-icons/ti";
import styled from "styled-components";
import { Text } from "../../Common.styled";

const ContentWrapper = styled.div`
  margin: 0 auto;
  padding: 10px;
`;
const Heading = styled.div`
  padding: 10px;
`;

const FeatContent = styled.div`
  /* display: flex; */
  /* justify-content: space-between; */
  img {
    float: left;
    margin-right: 20px;
    border-radius: 50%;
    shape-outside: circle(50%);
  }
`;

const Feat = styled.div`
  text-wrap: wrap;
  .icon {
    margin: 0;
    border: 0;
  }
`;

// const Feat = styled.div<{ indent: number }>`
//   /* display: flex;
//   align-items: center;
//   margin-left: ${(props) => `${props.indent * 16}px`}; */
// `;

const FeatWrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
`;
const SImage = styled.img`
  shape-outside: circle(50%);
  border-radius: 50%;
`;
interface FeatType {
  id: number;
  icon: IconType;
  text: string;
}

const feat: FeatType[] = [
  { id: 1, icon: TiBatteryHigh, text: "23+ Mins endurenace" },
  { id: 2, icon: TiBatteryHigh, text: "23+ Mins endurenace" },
  { id: 3, icon: TiBatteryHigh, text: "23+ Mins endurenace" },
  { id: 4, icon: TiBatteryHigh, text: "23+ Mins endurenace" },
  { id: 5, icon: TiBatteryHigh, text: "23+ Mins endurenace" },
];
const Features = () => {
  return (
    <ContentWrapper>
      <Heading>
        <Text size="20px" weight={700} color="brown">
          Krishi EL
        </Text>
      </Heading>
      <FeatContent>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/kiwifruit-on-a-plate.jpg"
          alt="kiwi pic"
          width={350}
        />

        <FeatWrapper>
          {feat.map((f) => (
            // <div key={f.id}>
            // <Feat
            //   key={f.id}
            //   indent={f.id < Math.round(feat.length / 2) ? f.id : f.id / 2}
            // >
            <Feat key={f.id}>
              <p>
                {<f.icon size="40" className="icon" />} {f.text}
              </p>
              {/* <Text>{f.text}</Text> */}
            </Feat>
            // </div>
          ))}
        </FeatWrapper>
      </FeatContent>
    </ContentWrapper>
  );
};

export default Features;
