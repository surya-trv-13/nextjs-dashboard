import { fetchFilteredCustomers } from "@/app/lib/data";
import {FormattedCustomersTable } from "@/app/lib/definitions";
import CustomersTable from "@/app/ui/customers/table";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {

  const query = searchParams?.query || '';
  const customers: FormattedCustomersTable[] = await fetchFilteredCustomers( query );

    return <CustomersTable customers={customers}/>
     
  }