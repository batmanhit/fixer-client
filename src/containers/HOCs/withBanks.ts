import { ChildDataProps, graphql } from "react-apollo";

import { Bank } from '../../models';
import { BANKS_QUERY } from '../../graphql';

type Response = {
  banks: Array<Bank>;
};

type ChildProps = ChildDataProps<{}, Response, {}>;

export const withBanks = graphql<{}, Response, {}, ChildProps>(BANKS_QUERY, {
  props: (props) => {
    return {
      data: props.data!,
      withBanks: {
        ...props.data!
      }
    }
  }
});
