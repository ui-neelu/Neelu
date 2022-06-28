import {ChoiceList, TextField, RangeSlider, Card, ResourceList,Filters,Heading,Stack,Button, Icon,Page } from "@shopify/polaris";
import { useState, useCallback } from "react";
import Merchants from "./Merchants";
import { RefreshMinor, ArrowLeftMinor} from '@shopify/polaris-icons';


function Merchantscomponent  () {
  const [accountStatus, setAccountStatus] = useState(null);
  const [moneySpent, setMoneySpent] = useState(null);
  const [taggedWith, setTaggedWith] = useState(null);
  const [queryValue, setQueryValue] = useState(null);

  const handleAccountStatusChange = useCallback(
    (value) => setAccountStatus(value),
    []
  );
  const handleMoneySpentChange = useCallback(
    (value) => setMoneySpent(value),
    []
  );
  const handleTaggedWithChange = useCallback(
    (value) => setTaggedWith(value),
    []
  );
  const handleFiltersQueryChange = useCallback(
    (value) => setQueryValue(value),
    []
  );
  const handleAccountStatusRemove = useCallback(
    () => setAccountStatus(null),
    []
  );
  const handleMoneySpentRemove = useCallback(() => setMoneySpent(null), []);
  const handleTaggedWithRemove = useCallback(() => setTaggedWith(null), []);
  const handleQueryValueRemove = useCallback(() => setQueryValue(null), []);
  const handleFiltersClearAll = useCallback(() => {
    handleAccountStatusRemove();
    handleMoneySpentRemove();
    handleTaggedWithRemove();
    handleQueryValueRemove();
  }, [
    handleAccountStatusRemove,
    handleMoneySpentRemove,
    handleQueryValueRemove,
    handleTaggedWithRemove,
  ]);

  const filters = [
    {
    

      label: "Account status",
      filter: (
        <ChoiceList
          title="Account status"
          titleHidden
          choices={[
            { label: "Enabled", value: "enabled" },
            { label: "Not invited", value: "not invited" },
            { label: "Invited", value: "invited" },
            { label: "Declined", value: "declined" },
          ]}
          selected={accountStatus || []}
          onChange={handleAccountStatusChange}
          allowMultiple
        />
      ),
      shortcut: false,
    },
    {
      key: "taggedWith",
      label: "Tagged with",
      filter: (
        
        <TextField
          label="Tagged with"
          value={taggedWith}
          onChange={handleTaggedWithChange}
          autoComplete="off"
          labelHidden
          placeholder="Search by Transaction ID, Shop Name, Shop URL"
        />
      ),
      shortcut: false,
    },
    {
      key: "moneySpent",
      label: "Money spent",
      filter: (
        <RangeSlider
          label="Money spent is between"
          labelHidden
          value={moneySpent || [0, 500]}
          prefix="$"
          output
          min={0}
          max={2000}
          step={1}
          onChange={handleMoneySpentChange}
        />
      ),
    },
   
  ];

  const appliedFilters = [];
  if (!isEmpty(accountStatus)) {
    const key = "accountStatus";
    appliedFilters.push({
      key,
      label: disambiguateLabel(key, accountStatus),
      onRemove: handleAccountStatusRemove,
    });
  }
  if (!isEmpty(moneySpent)) {
    const key = "moneySpent";
    appliedFilters.push({
      key,
      label: disambiguateLabel(key, moneySpent),
      onRemove: handleMoneySpentRemove,
    });
  }
  if (!isEmpty(taggedWith)) {
    const key = "taggedWith";
    appliedFilters.push({
      key,
      label: disambiguateLabel(key, taggedWith),
      onRemove: handleTaggedWithRemove,
    });
  }
  return (
    <Page fullWidth >
    <div className='transaction-header'>
          <Stack distribution="equalSpacing" alignment="center" >
            <Stack  alignment="center">
            <Icon source={ArrowLeftMinor} color="base" />   <Heading>Best Buy CA- Merchants</Heading>
            </Stack>
            <Stack>
              <Button><Icon source={RefreshMinor} color="base" />Refresh</Button>
              <Button primary >Create ClickUp Groups </Button>
            </Stack>
          </Stack>
        </div>
      <Card>
        <ResourceList
          resourceName={{ singular: "customer", plural: "customers"}}
          filterControl={
            <Filters
              filter={<Button>more </Button>}
              queryValue={queryValue}
              filters={filters}
              appliedFilters={appliedFilters}
              onQueryChange={handleFiltersQueryChange}
              onQueryClear={handleQueryValueRemove}
              onClearAll={handleFiltersClearAll}
            />
          }
          items={[
       
            {
              id: 256,
            
            },
          ]}
          renderItem={(item) => {
           
          }}
        /> 
        <Merchants/>
      </Card>
  
    </Page>
  );

  function disambiguateLabel(key, value) {
    switch (key) {
      case "moneySpent":
        return `Money spent is between $${value[0]} and $${value[1]}`;
      case "taggedWith":
        return `Tagged with ${value}`;
      case "accountStatus":
        return value.map((val) => `Customer ${val}`).join(", ");
      default:
        return value;
    }
  }

  function isEmpty(value) {
    if (Array.isArray(value)) {
      return value.length === 0;
    } else {
      return value === "" || value == null;
    }
  }
}


export default Merchantscomponent;