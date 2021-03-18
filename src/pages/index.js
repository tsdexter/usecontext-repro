import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TestContext from "../context/test"

const IndexPage = () => {
  const useContextValue = React.useContext(TestContext)
  console.log("testContext value from useContext(TestContext)", useContextValue)
  return (
    <Layout>
      <SEO title="Home" />
      TestContext value from useContext(TestContext):
      <pre>{JSON.stringify(useContextValue, null, 2)}</pre>
      <TestContext.Consumer>
        {consumerValue => {
          console.log(
            "testContext value from TextContext.Consumer",
            consumerValue
          )
          return (
            <React.Fragment>
              TestContext value from TextContext.Consumer:
              <pre>{JSON.stringify(consumerValue, null, 2)}</pre>
            </React.Fragment>
          )
        }}
      </TestContext.Consumer>
    </Layout>
  )
}

export default IndexPage
