import styled from 'styled-components';

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;

  table {
    width: 320px;
    max-width: 320px;
    border-collapse: collapse;
    margin: 10px 0;
    border: 4px solid #999;
    -webkit-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.75);
  
      th {
        padding: 5px 20px;
        h3 {
          margin: 5px;
        }
      }

      td {
        padding: 10px 20px;
        text-align: center;
        border-right: 1px solid #999;
      }

      td:nth-child(2) {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 180px;
      }

      tr {
        border-bottom: 1px solid #999;
      }

      tr:nth-child(odd) {
        background: #f2f2f2;
      }

      tr:hover {
        background: #d1d1d1;
      }

  }
`;