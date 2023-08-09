import { useState, useEffect } from "react";
import axios from "axios";
import Tenant from "./Tenant"
import TenantForm from "./TenantForm";

function TenantList() {
    const [tenantList, setTenantList] = useState([]);

    //gete data drom rrails backend
    async function getTenants() {
        let response = await axios.get("http://localhost:3000/tenants",
            { headers: { Accept: "application/json" } });
        setTenantList(response.data)
        console.log(response.data)
    }
    //call above function from useEffect, will run on mount
    useEffect(() => {
        getTenants();
    }, [])

    return (
        <div className="container mt-5">
            <h3 className="text-center">Tenants</h3>

            {
                tenantList.map(function (i, index) {
                    return (
                        <Tenant firstName={i.first_name} lastName={i.last_name} apartment={i.apartment} phone={i.phone} email={i.email}></Tenant>
                    )
                })


            }
            <TenantForm/>
        </div>
    )
}

export default TenantList;