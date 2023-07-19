import React, { useState, useEffect } from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import {
    MdCheckBox,
    MdCheckBoxOutlineBlank,
    MdChevronRight,
    MdKeyboardArrowDown,
    MdAddBox,
    MdIndeterminateCheckBox,
} from "react-icons/md";

//icons
const icons = {
    check: <MdCheckBox className="rct-icon rct-icon-check" />,
    uncheck: <MdCheckBoxOutlineBlank className="rct-icon rct-icon-uncheck" />,
    halfCheck: (
        <MdIndeterminateCheckBox className="rct-icon rct-icon-half-check" />
    ),
    expandClose: (
        <MdChevronRight className="rct-icon rct-icon-expand-close" />
    ),
    expandOpen: (
        <MdKeyboardArrowDown className="rct-icon rct-icon-expand-open" />
    ),
    expandAll: <MdAddBox className="rct-icon rct-icon-expand-all" />,
    collapseAll: (
        <MdIndeterminateCheckBox className="rct-icon rct-icon-collapse-all" />
    )
};

const WidgetTree = () => {

    const [checked, setChecked] = useState([]);
    const [expanded, setExpanded] = useState([]);
    const [dataTree, setDataTree] = useState(null);

    //fetch api call for tree like json data
    useEffect(() => {
        fetch("http://16.171.34.94:5000/getTreeViewData", {
            "method": "GET"
        }).then((res) => {
            res.json().then((data) => {
                setDataTree(data);
            }).catch((err) => {
                console.log(err);
            })
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <>
            {
                dataTree ?
                    <CheckboxTree
                        nodes={dataTree}
                        checked={checked}
                        expanded={expanded}
                        onCheck={checked => setChecked(checked)}
                        onExpand={expanded => setExpanded(expanded)}
                        showExpandAll={true}
                        showNodeIcon={false}
                        icons={icons}
                    />
                    :
                    <h3>Loading....</h3>
            }
        </>
    );
}
export default WidgetTree;
