import './Breadcrumb.scss';

function Breadcrum(props) {
    let breadcrumbText = '';
    if (props.categories != null) {
        breadcrumbText = props.categories.reduce((accum, category, index) => {
        let suffix = index === props.categories.length - 1 ? '' : ' > ';
        return accum + category + suffix;
        }, '');
    }

    return (
        <div className="breadcrumb">
            {breadcrumbText}
        </div>
    );
}

export default Breadcrum;
