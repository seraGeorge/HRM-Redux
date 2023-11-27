import styled from "styled-components";

const TableDataWrapper = styled.tr`

.employee-data{
    font-size: 14px;
    font-weight: 500;
    position:relative;
}
.employee-view{
    color: #0000FF;
    cursor:pointer; 

    &:visited{
        color:#800080;
    }
    &:active{
        text-decoration:underline;
    }
    &:hover{
        color:#000099;
        text-decoration:underline;
    }
}
button {
    flex-direction: row-reverse;
    background: none;
    padding: 0;
    border-radius: 0;
}


  
`;
export default TableDataWrapper;