import React, { Fragment } from 'react';
import { Table } from 'react-bootstrap';
import Link from 'next/link';

const RelatedLink = ({ data }) => {
    return (
        <Fragment>
            {data && <Table bordered responsive>
                <th>
                    <tr>Related Links</tr>
                </th>
                <tbody>
                    {data && data.map((item, index) => {
                        return <tr key={index}>
                            <td>
                                <Link href={`${item.relatedLink}`}><a target={item.newTab ? "_blank" :"_self" } className='text-info'>{item.displayText}</a></Link>
                            </td>
                        </tr>
                    })}
                </tbody>
            </Table>}
        </Fragment>
    )
}

export default RelatedLink;