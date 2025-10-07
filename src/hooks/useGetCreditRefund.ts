import { useQuery } from "@apollo/client";
import { GET_REFUND } from "../gql/getCreditRefund";

export const useGetCreditRefund = () => {
  const { loading, data, error } = useQuery(GET_REFUND, {
    variables: {
      customerNumber: "14227295",
      accountNumber: "100850332",
    },
    onError: () => {
      console.log("error");
    },
    fetchPolicy: "network-only",
  });
  console.log("data", loading, data, error);
  return { loading, data, error };
};
