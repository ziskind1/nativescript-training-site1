import * as React from 'react';
import { OfferingsJsonConnection } from '../domain/graphql-types';
import { offeringFromOfferingsJsonEdge } from '../domain/converters';
import { OfferingSummaries } from '../components/offerings/offering-summaries';
import { InnerBanner } from '../components/global/inner-banner/inner-banner';

interface TrainingPageProps {
  data: {
    offeringsConnection: OfferingsJsonConnection;
  };
}

export default class extends React.Component<TrainingPageProps, any> {
  constructor(props: TrainingPageProps) {
    super(props);
  }

  public render() {
    const offerings = this.props.data.offeringsConnection.edges.map(
      offeringFromOfferingsJsonEdge
    );

    return (
      <div>
        <InnerBanner
          title="Training"
          subtitle="NativeScript Training Delivery Options"
        />

        <div className="course-search-form">
          <div className="container">
            <div className="title">
              <p>
                NativeScript Training offers technical training using a variety
                of delivery methods. No matter which option you choose, you will
                still receive the most in-depth training available anywhere.
              </p>
            </div>
          </div>
        </div>
        <OfferingSummaries offerings={offerings} />
      </div>
    );
  }
}

export const trainingPageQuery = graphql`
  query TrainingPageQuery {
    #get offerings
    offeringsConnection: allOfferingsJson {
      edges {
        node {
          id
          order
          title
          img
          summary
        }
      }
    }
  }
`;
