import styled from 'styled-components';

const InfoWrapper = styled.div`
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

      tr:nth-child(even) {
        background: #ffffff;
      }

      tr:hover {
        background: #d1d1d1;
      }

  }
`;

export default InfoWrapper;
