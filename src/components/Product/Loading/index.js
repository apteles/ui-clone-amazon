import React from 'react';
import { Container } from './styles';
import Panel from '../../UI/Shimmer/Panel'
import Shimmer from '../../UI/Shimmer'

function Loading() {
  return (
    <Container>
        <Panel className="no-shadow">
            <Shimmer className="product-image" />
            <Shimmer className="row-name" />
            <Shimmer className="row-brand" />
            <Shimmer className="row-price" />
        </Panel>
    </Container>
  );
}

export default Loading;