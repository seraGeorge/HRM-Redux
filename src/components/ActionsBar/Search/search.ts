import styled from "styled-components";

const SearchWrapper = styled.div`
    flex: 1;
    background-color: var(--white-color);
    border-radius: 10px;
    padding: 5px;
    border: 1px solid  #D3D3D3;
    
    .material-symbols-outlined, .search-dropdown-btn-text{
      margin: 0;
      color:  #D3D3D3;  
    }
  }
  .search-form {
    flex: 1;
  }
  .search-input {
    width: 100%;
    background: transparent;
    border: none;
    outline: 0;
    text-decoration: none;
    font-size: 16px;
    color: var(--secondary-color);

    &::placeholder{
      color:var(--placeholder-color)
    }
  }
  .search-btn {
    gap: 5px !important;
    border-radius: 0;
    background: none;
    border-left: 1px solid  #D3D3D3;
    flex-direction: row-reverse;
  }


`;
export default SearchWrapper;
