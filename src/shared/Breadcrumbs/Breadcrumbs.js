import React from 'react';
import { Link } from 'react-router-dom';
import  { Breadcrumb } from 'antd';

import { getNavUrl, REGIONS_ROUTE } from 'routes';

export default function Breadcrumbs(props) {
  if (!props.isRegionPage) {
    return null;
  }

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>
        <Link to={getNavUrl(REGIONS_ROUTE)}>Регионы и библиотеки</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>Детальная информация по региону</Breadcrumb.Item>
    </Breadcrumb>
  )
}
