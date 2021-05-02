import styles from "./components/Style.module.css";
import Grid from "./components/Grid";
import feature, {
  getFeature,
  getMiniFeature,
} from "./components/Feature-items";
import { Component } from "react";
import styled from "styled-components";
import miniFeature from "./components/minifeature";

class Feature extends Component {
  state = {
    feature: getFeature(),
    minifeature: getMiniFeature(),
  };
}

export default {
  title: "Stripe",
};

export const Stripe = () => {
  return (
    <div>
      <Grid>
        {feature.map((feature) => (
          <div>
            <header>
              <Title>{feature.title}</Title>
            </header>
            <p>{feature.content}</p>
            <Links>
              <a href="#" className={styles.Contact_button}>
                {feature.ContactSalesButton}
              </a>

              <a href="#">
                {feature.button}
                <svg width="10px" height="10px" viewBox="0 0 10 10">
                  <path d="M 2 0 L 5 0 L10 5 L5 10 L 2 10 L7 5 L2 0 "></path>
                </svg>
              </a>
            </Links>
          </div>
        ))}
        {miniFeature.map((minifeature) => (
          <div>
            <header>
              <h1>{minifeature.title}</h1>
            </header>
            <p>{minifeature.content}</p>
            <Links>
              <a href="#">
                {minifeature.button}
                <svg width="10px" height="10px" viewBox="0 0 10 10">
                  <path
                    x="10px"
                    d="M 2 0 L 5 0 L10 5 L5 10 L 2 10 L7 5 L2 0 "
                  ></path>
                </svg>
              </a>
            </Links>
          </div>
        ))}
      </Grid>
    </div>
  );
};

const Links = styled.div``;

const Title = styled.h1`
  position: relative;
  @keyframes changewidth {
    from {
      transform: scale(1);
      top: 0px;
    }

    to {
      transform: scale(0.8);
      top: 25px;
    }
  }
  padding: 0;
  margin: 0;
  display: inline;
  left: 0px;
  animation: forwards;
  animation-duration: 3.1s;
  animation-name: changewidth;
  animation-iteration-count: infinite;
`;

//<svg width="10px" height="10px" viewBox="0 0 10 10">
//<path d="M 2 0 L 5 0 L10 5 L5 10 L 2 10 L7 5 L2 0 "></path>
//</svg>
