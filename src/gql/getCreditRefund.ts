import { gql } from "@apollo/client";

export const GET_REFUND = gql`
query CreditRefundTransactionsQuery($customerNumber:String!,$accountNumber:String!) {
  getCreditRefundTransactions(customerNumber:$customerNumber,accountNumber: $accountNumber){
isFinalBillIssued
 paymentRefundMethod{
   paymentId
        paymentMethod
        description
 }
  }`;
