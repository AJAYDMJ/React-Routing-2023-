import { NavLink, useResolvedPath } from "react-router-dom";
import { isPathAllowed } from "../../utils/common";

export default function PrivateLink(props) {
    console.log('props inprivateLink', props)
    const to = props.to;

    // useResolved path is to get the full path
    const path = useResolvedPath(to)
    const isAllowed = isPathAllowed(path.pathname);
    return isAllowed && <NavLink {...props}/>
}