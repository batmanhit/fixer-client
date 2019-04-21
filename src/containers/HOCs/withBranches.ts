import { ChildDataProps, graphql } from "react-apollo";

import { Branch } from '../../models';
import { BRANCHES_QUERY } from '../../graphql';

type Response = {
  branches: Array<Branch>;
};

type ChildProps = ChildDataProps<{}, Response, {}>;

export const withBranches = graphql<{}, Response, {}, ChildProps>(BRANCHES_QUERY, {
  props: (props) => ({
    data: props.data!,
    withBranches: {
      ...props.data!
    }
  })
});
