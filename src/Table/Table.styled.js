import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  transition: color 0.3s;
  color: ${({ theme }) => (theme.tableColor ? theme.tableColor : "white")};
  border-spacing: 0;
`;

export const Thead = styled.thead`
  background: blue;
`;

export const Tbody = styled.tbody`
  transition: color 0.3s;
  background: chocolate;
  color: ${({ theme }) => (theme.tableBodyColor ? theme.tableBodyColor : "#ffffff70")};
`;

export const Tr = styled.tr`
  transition: background 0.3s;
  background: ${({ isSelected }) => (isSelected ? `#ffffff15` : "transparent")};

  &:hover,
  &:focus {
    background: #ffffff10;
  }
`;

export const Th = styled.th`
  ${({ customWidth }) => customWidth && `width: ${customWidth}`};
  padding: 20px 10px;
`;

export const Td = styled.td`
  padding: ${({ paddingTd }) => (paddingTd === undefined ? "10px" : paddingTd)};
  font-size: 12px;
  border-bottom: 1px solid #ffffff15;
`;

export const SortWrapper = styled.div`
  display: flex;
  align-items: center;
  ${({ justify }) => justify && `justify-content: ${justify}`};
`;
