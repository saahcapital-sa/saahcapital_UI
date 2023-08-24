import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { LiaAngleRightSolid } from 'react-icons/lia';

const CustomBreadcrumb = ({breadcrumbData}) => {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter(segment => segment !== ''); 

  return (
    <Breadcrumb className="customBreadcrumb">
      {breadcrumbData?.map((item, index) => (
          <>
            <Breadcrumb.Item key={index} href={item.pageUrl}>{item.pageName}</Breadcrumb.Item><LiaAngleRightSolid />
          </>
        )
      )}
      {pathSegments.map((segment, index) => (
        <Breadcrumb.Item key={index} href={`/${pathSegments.slice(0, index + 1).join('/')}`}>
          {segment}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;