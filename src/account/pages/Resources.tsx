import "./Resources.css";
// import type { PageProps } from "keycloakify/account/pages/PageProps";
// import type { KcContext } from "../kcContext";
// import type { I18n } from "../i18n";

export default function Resources() {
    // export default function Resources(props: PageProps<Extract<KcContext, { pageId: "resources.ftl" }>, I18n>) {
    // const { kcContext, i18n, doUseDefaultCss, classes } = props;

    // const { getClassName } = useGetClassName({
    //     doUseDefaultCss,
    //     "classes": {
    //         ...classes,
    //         "kcBodyClass": clsx(classes?.kcBodyClass, "password")
    //     }
    // });

    // const { url, password, account, stateChecker } = kcContext;

    // const { msgStr, msg } = i18n;

    // function showHideActions(elm) {
    //     if (elm.style.display == "none") {
    //         elm.style.display = "";
    //     } else {
    //         elm.style.display = "none";
    //     }
    // }
    // function removeScopeElm(elm) {
    //     var td = elm.parentNode;
    //     var tr = td.parentNode;
    //     var tbody = tr.parentNode;

    //     td.removeChild(elm);

    //     var childCount = td.childNodes.length - 1;

    //     for (let i = 0; i < td.childNodes.length; i++) {
    //         if (!td.childNodes[i].tagName || td.childNodes[i].tagName.toUpperCase() != "DIV") {
    //             td.removeChild(td.childNodes[i]);
    //             childCount--;
    //         }
    //     }

    //     if (childCount <= 0) {
    //         tbody.removeChild(tr);
    //     }
    // }

    // function removeAllScopes(id) {
    //     var scopesElm = document.getElementsByName("removeScope-" + id);

    //     for (let i = 0; i < scopesElm.length; i++) {
    //         var td = scopesElm[i].parentNode.parentNode;
    //         var tr = td.parentNode;
    //         var tbody = tr.parentNode;
    //         tbody.removeChild(tr);
    //     }
    // }

    // function selectAllCheckBoxes(formName, elm, name) {
    //     var shares = document.forms[formName].getElementsByTagName("input");

    //     for (let i = 0; i < shares.length; i++) {
    //         if (shares[i].name == name) {
    //             shares[i].checked = elm.checked;
    //         }
    //     }
    // }

    return (
        <div>Resources</div>
        // <>
        //     <div className="row">
        //         <div className="col-md-10">
        //             <h2>{msg("myResources")}</h2>
        //         </div>
        //     </div>

        //     {authorization.resourcesWaitingApproval?.length !== 0 && (
        //         <>
        //             <div className="row">
        //                 <div className="col-md-12">
        //                     <h3>{msg("needMyApproval")}</h3>
        //                 </div>
        //             </div>
        //             <div className="row">
        //                 <div className="col-md-12">
        //                     <table className="table table-striped table-bordered">
        //                         <thead>
        //                             <tr>
        //                                 <th>{msg("resource")}</th>
        //                                 <th>{msg("requestor")}</th>
        //                                 <th>{msg("permissionRequestion")}</th>
        //                                 <th>{msg("action")}</th>
        //                             </tr>
        //                         </thead>
        //                         <tbody>
        //                             {authorization.resourcesWaitingApproval.map(resource =>
        //                                 resource.permissions.map(permission => (
        //                                     <form
        //                                         key={`${resource.id}-${permission.requester.username}`}
        //                                         action={url.getResourceGrant(resource.id)}
        //                                         name={`approveForm-${resource.id}-${permission.requester.username}`}
        //                                         method="post"
        //                                     >
        //                                         <input type="hidden" name="action" value="grant" />
        //                                         <input type="hidden" name="requester" value={permission.requester.username} />
        //                                         <input type="hidden" id="stateChecker" name="stateChecker" value={stateChecker} />
        //                                         <tr>
        //                                             <td>{resource.displayName ? resource.displayName : resource.name}</td>
        //                                             <td>{permission.requester.email ? permission.requester.email : permission.requester.username}</td>
        //                                             <td>
        //                                                 {permission.scopes.map(scope => (
        //                                                     <div
        //                                                         key={`${resource.name}-${permission.requester.username}-${scope.scope.name}`}
        //                                                         className="search-box"
        //                                                     >
        //                                                         {scope.scope?.displayName ? scope.scope.displayName : scope.scope.name}
        //                                                         <button
        //                                                             className="close-icon"
        //                                                             type="button"
        //                                                             id={`grant-remove-scope-${resource.name}-${permission.requester.username}-${scope.scope.name}`}
        //                                                             name={`removeScope-${resource.id}-${permission.requester.username}`}
        //                                                             onClick={e => {
        //                                                                 removeScopeElm(e.currentTarget.parentNode);
        //                                                                 document.forms[`approveForm-${resource.id}-${permission.requester.username}`][
        //                                                                     "action"
        //                                                                 ].value = "deny";
        //                                                                 document.forms[
        //                                                                     `approveForm-${resource.id}-${permission.requester.username}`
        //                                                                 ].submit();
        //                                                             }}
        //                                                         >
        //                                                             <i className="fa fa-times" aria-hidden="true"></i>
        //                                                         </button>
        //                                                         <input type="hidden" name="permission_id" value={scope.id} />
        //                                                     </div>
        //                                                 ))}
        //                                             </td>
        //                                             <td width="20%" align="middle" style={{ verticalAlign: "middle" }}>
        //                                                 <a
        //                                                     href="#"
        //                                                     id={`grant-${resource.name}-${permission.requester.username}`}
        //                                                     onClick={() => {
        //                                                         document.forms[`approveForm-${resource.id}-${permission.requester.username}`][
        //                                                             "action"
        //                                                         ].value = "grant";
        //                                                         document.forms[
        //                                                             `approveForm-${resource.id}-${permission.requester.username}`
        //                                                         ].submit();
        //                                                     }}
        //                                                     type="submit"
        //                                                     className="btn btn-primary"
        //                                                 >
        //                                                     {msg("doApprove")}
        //                                                 </a>
        //                                                 <a
        //                                                     href="#"
        //                                                     id={`deny-${resource.name}-${permission.requester.username}`}
        //                                                     onClick={() => {
        //                                                         removeAllScopes(`${resource.id}-${permission.requester.username}`);
        //                                                         document.forms[`approveForm-${resource.id}-${permission.requester.username}`][
        //                                                             "action"
        //                                                         ].value = "deny";
        //                                                         document.forms[
        //                                                             `approveForm-${resource.id}-${permission.requester.username}`
        //                                                         ].submit();
        //                                                     }}
        //                                                     type="submit"
        //                                                     className="btn btn-danger"
        //                                                 >
        //                                                     {msg("doDeny")}
        //                                                 </a>
        //                                             </td>
        //                                         </tr>
        //                                     </form>
        //                                 ))
        //                             )}
        //                         </tbody>
        //                     </table>
        //                 </div>
        //             </div>
        //         </>
        //     )}

        //     <div className="row">
        //         <div className="col-md-12">
        //             <h3>{msg("myResourcesSub")}</h3>
        //         </div>
        //     </div>
        //     <div className="row">
        //         <div className="col-md-12">
        //             <table className="table table-striped table-bordered">
        //                 <thead>
        //                     <tr>
        //                         <th>{msg("resource")}</th>
        //                         <th>{msg("application")}</th>
        //                         <th>{msg("peopleSharingThisResource")}</th>
        //                     </tr>
        //                 </thead>
        //                 <tbody>
        //                     {authorization.resources?.length !== 0 ? (
        //                         authorization.resources.map(resource => (
        //                             <tr key={resource.id}>
        //                                 <td>
        //                                     <a id={`detail-${resource.name}`} href={url.getResourceDetailUrl(resource.id)}>
        //                                         {resource.displayName ? resource.displayName : resource.name}
        //                                     </a>
        //                                 </td>
        //                                 <td>
        //                                     {resource.resourceServer.baseUri ? (
        //                                         <a href={resource.resourceServer.baseUri}>{resource.resourceServer.name}</a>
        //                                     ) : (
        //                                         resource.resourceServer.name
        //                                     )}
        //                                 </td>
        //                                 <td>
        //                                     {resource.shares?.length !== 0 ? (
        //                                         <a href={url.getResourceDetailUrl(resource.id)}>
        //                                             {resource.shares.length} <i className="fa fa-users"></i>
        //                                         </a>
        //                                     ) : (
        //                                         msg("notBeingShared")
        //                                     )}
        //                                 </td>
        //                             </tr>
        //                         ))
        //                     ) : (
        //                         <tr>
        //                             <td colSpan={3}>{msg("notHaveAnyResource")}</td>
        //                         </tr>
        //                     )}
        //                 </tbody>
        //             </table>
        //         </div>
        //     </div>

        //     <div className="row">
        //         <div className="col-md-12">
        //             <h3>{msg("resourcesSharedWithMe")}</h3>
        //         </div>
        //     </div>
        //     <div className="row">
        //         <div className="col-md-12">
        //             <form action={url.resourceUrl} name="shareForm" method="post">
        //                 <input type="hidden" name="action" value="cancel" />
        //                 <input type="hidden" id="stateChecker" name="stateChecker" value={stateChecker} />
        //                 <table className="table table-striped table-bordered">
        //                     <thead>
        //                         <tr>
        //                             <th width="5%">
        //                                 <input
        //                                     type="checkbox"
        //                                     onClick={() => selectAllCheckBoxes("shareForm", this, "resource_id")}
        //                                     disabled={authorization.sharedResources?.length === 0}
        //                                 />
        //                             </th>
        //                             <th>{msg("resource")}</th>
        //                             <th>{msg("owner")}</th>
        //                             <th>{msg("application")}</th>
        //                             <th>{msg("permission")}</th>
        //                             <th>{msg("date")}</th>
        //                         </tr>
        //                     </thead>
        //                     <tbody>
        //                         {authorization.sharedResources?.length !== 0 ? (
        //                             authorization.sharedResources.map(resource => (
        //                                 <tr key={resource.id}>
        //                                     <td>
        //                                         <input type="checkbox" name="resource_id" value={resource.id} />
        //                                     </td>
        //                                     <td>{resource.displayName ? resource.displayName : resource.name}</td>
        //                                     <td>{resource.ownerName}</td>
        //                                     <td>
        //                                         {resource.resourceServer.baseUri ? (
        //                                             <a href={resource.resourceServer.baseUri}>{resource.resourceServer.name}</a>
        //                                         ) : (
        //                                             resource.resourceServer.name
        //                                         )}
        //                                     </td>
        //                                     <td>
        //                                         {resource.permissions?.length !== 0 ? (
        //                                             <ul>
        //                                                 {resource.permissions.map(permission =>
        //                                                     permission.scopes.map(scope => (
        //                                                         <li key={scope.id}>
        //                                                             {scope.granted && scope.scope
        //                                                                 ? scope.scope.displayName
        //                                                                     ? scope.scope.displayName
        //                                                                     : scope.scope.name
        //                                                                 : msg("anyPermission")}
        //                                                         </li>
        //                                                     ))
        //                                                 )}
        //                                             </ul>
        //                                         ) : (
        //                                             msg("anyAction")
        //                                         )}
        //                                     </td>
        //                                     <td>{resource.permissions[0].grantedDate?.datetime}</td>
        //                                 </tr>
        //                             ))
        //                         ) : (
        //                             <tr>
        //                                 <td colSpan={6}>{msg("noResourcesSharedWithYou")}</td>
        //                             </tr>
        //                         )}
        //                     </tbody>
        //                 </table>
        //             </form>
        //         </div>
        //         {authorization.sharedResources?.length !== 0 && (
        //             <div className="col-md-12">
        //                 <a href="#" onClick={() => document.forms["shareForm"].submit()} type="submit" className="btn btn-danger">
        //                     {msg("doRemoveSharing")}
        //                 </a>
        //             </div>
        //         )}
        //     </div>

        //     {authorization.resourcesWaitingOthersApproval?.length !== 0 && (
        //         <>
        //             <br />
        //             <div className="row">
        //                 <div className="col-md-12">
        //                     <h3>{msg("requestsWaitingApproval")}</h3>
        //                 </div>
        //             </div>
        //             <div className="row">
        //                 <div className="col-md-12">
        //                     <i className="pficon pficon-info"></i>{" "}
        //                     {msg("havePermissionRequestsWaitingForApproval", authorization.resourcesWaitingOthersApproval?.length)}
        //                     <a href="#" onClick={() => (document.getElementById("waitingApproval").style.display = "")}>
        //                         {msg("clickHereForDetails")}
        //                     </a>
        //                     <div className="row">
        //                         <div className="col-md-12"></div>
        //                     </div>
        //                     <div className="row">
        //                         <div className="col-md-12"></div>
        //                     </div>
        //                     <div className="row">
        //                         <div className="col-md-12"></div>
        //                     </div>
        //                     <div className="row" id="waitingApproval" style={{ display: "none" }}>
        //                         <div className="col-md-12">
        //                             <form action={url.resourceUrl} name="waitingApprovalForm" method="post">
        //                                 <input type="hidden" name="action" value="cancelRequest" />
        //                                 <input type="hidden" id="stateChecker" name="stateChecker" value={stateChecker} />
        //                                 <table className="table table-striped table-bordered">
        //                                     <thead>
        //                                         <tr>
        //                                             <th width="5%">
        //                                                 <input
        //                                                     type="checkbox"
        //                                                     onClick={() => selectAllCheckBoxes("waitingApprovalForm", this, "resource_id")}
        //                                                     disabled={authorization.resourcesWaitingOthersApproval?.length === 0}
        //                                                 />
        //                                             </th>
        //                                             <th>{msg("resource")}</th>
        //                                             <th>{msg("owner")}</th>
        //                                             <th>{msg("action")}</th>
        //                                             <th>{msg("date")}</th>
        //                                         </tr>
        //                                     </thead>
        //                                     <tbody>
        //                                         {authorization.resourcesWaitingOthersApproval?.map(resource => (
        //                                             <tr key={resource.id}>
        //                                                 <td>
        //                                                     <input type="checkbox" name="resource_id" value={resource.id} />
        //                                                 </td>
        //                                                 <td>{resource.displayName ? resource.displayName : resource.name}</td>
        //                                                 <td>{resource.ownerName}</td>
        //                                                 <td>
        //                                                     <ul>
        //                                                         {resource.permissions?.map(permission =>
        //                                                             permission.scopes.map(scope => (
        //                                                                 <li key={scope.id}>
        //                                                                     {scope.scope
        //                                                                         ? scope.scope.displayName
        //                                                                             ? scope.scope.displayName
        //                                                                             : scope.scope.name
        //                                                                         : msg("anyPermission")}
        //                                                                 </li>
        //                                                             ))
        //                                                         )}
        //                                                     </ul>
        //                                                 </td>
        //                                                 <td>{resource.permissions[0].createdDate?.datetime}</td>
        //                                             </tr>
        //                                         ))}
        //                                     </tbody>
        //                                 </table>
        //                             </form>
        //                         </div>
        //                         <div className="col-md-12">
        //                             <a
        //                                 href="#"
        //                                 onClick={() => document.forms["waitingApprovalForm"].submit()}
        //                                 type="submit"
        //                                 className="btn btn-danger"
        //                             >
        //                                 {msg("doRemoveRequest")}
        //                             </a>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </>
        //     )}
        // </>
    );
}
