This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## React Query
```javascript
  const { data: listCompanyRecently, isLoading: isLoadingFetchRecentlyCompanies } = useQuery(
    [QueryKey.getRecentlyCompanies, { enalbe }],
    () => (sessionClient ? companiesApi.getCompaniesRecently() : null),
    {
      select: (data: ResponseBaseWithoutPaging<Company[]> | null) => {
        console.log('select data', data);

        const listData =
          (data?.content &&
            data?.content.map((item: Company) => ({
              ...item,
              key: item?._id
            }))) ||
          [];
        return listData;
      },
      onSuccess(data) {
        console.log('onSuccess Data: ', data);
      },
      onError: (data: any) => {
        showAlertError(data?.content?.messageContent);
      },
      enabled: !!enalbe,
      keepPreviousData: true
    }
  );
  ```
  - ```enabled``` option: ```USED FOR CONDITIONAL FETCH```  If enabled is ```false```, it clear cached data and will not automatically fetch on mount.
  - ```keepPreviousData```: ```USED FOR PAGINATION OR CONDITONAL FETCH```
  
## Docs:

Consider the following example where we would ideally want to increment a pageIndex (or cursor) for a query. If we were to use useQuery, it would still technically work fine, but the UI would jump in and out of the success and loading states as different queries are created and destroyed for each page or cursor. By setting keepPreviousData to true we get a few new things:

- The data from the last successful fetch available while new data is being requested, even though the query key has changed.
- When the new data arrives, the previous data is ```seamlessly swapped to show the new data.```
- isPreviousData is made available to know what data the query is currently providing you
