import React, { Component } from 'react';
import {
  Box,
  Heading,
  Paragraph,
} from 'grommet';

class Resources extends Component {
  render() {
    return (
      <Box direction='row'flex overflow={{ horizontal: 'hidden' }} align='top' justify='center' wrap="true" margin={{left:"medium", right:"medium"}}  style={{zoom:"0.92"}}>
      <div style={{minWidth:"50%"}}>
        <Heading level="2" style={{paddingTop:"15px"}}>
          Guides
        </Heading>
        <Paragraph style={{minWidth:"100%"}}>
          An Incomplete Guide to Rollups - <a href="https://vitalik.ca/general/2021/01/05/rollup.html" rel="noopener noreferrer" target='_blank'>https://vitalik.ca/general/2021/01/05/rollup.html</a> <br/><br/>
          ZK-Rollups on EthHub - <a href="https://docs.ethhub.io/ethereum-roadmap/layer-2-scaling/zk-rollups/" rel="noopener noreferrer" target='_blank'>https://docs.ethhub.io/ethereum-roadmap/layer-2-scaling/zk-rollups/</a> <br/><br/>
          What are zkRollups? - <a href="https://www.numio.one/what-are-zkrollups/" rel="noopener noreferrer" target='_blank'>https://www.numio.one/what-are-zkrollups/</a> <br/><br/>
          The best comparison on zkRollups today - <a href="https://newsletter.banklesshq.com/p/the-best-comparison-on-zkrollups" rel="noopener noreferrer" target='_blank'>https://newsletter.banklesshq.com/p/the-best-comparison-on-zkrollups</a> <br/><br/>
          The Ultimate Guide to Rollups - <a href="https://jsidhu.medium.com/the-ultimate-guide-to-rollups-f8c075571770" rel="noopener noreferrer" target='_blank'>https://jsidhu.medium.com/the-ultimate-guide-to-rollups-f8c075571770</a> <br/><br/>
    
        <Heading level="2" style={{paddingTop:"15px"}}>
          zkRollup Docs
        </Heading>
          StarkNet and Cairo Documentation - <a href="https://www.cairo-lang.org/docs/" rel="noopener noreferrer" target='_blank'>https://www.cairo-lang.org/docs/</a> <br/><br/>
          Hermez network docs - <a href="https://docs.hermez.io/#/" rel="noopener noreferrer" target='_blank'>https://docs.hermez.io/#/</a> <br/><br/>
          Introduction to zkSync for Developers - <a href="https://zksync.io/dev/" rel="noopener noreferrer" target='_blank'>https://zksync.io/dev/</a> <br/><br/>
          Aztec Developer Docs - <a href="https://developers.aztec.network/" rel="noopener noreferrer" target='_blank'>https://developers.aztec.network/</a> <br/><br/>
          Loopring Developer Docs - <a href="https://docs.loopring.io/en/" rel="noopener noreferrer" target='_blank'>https://docs.loopring.io/en/</a> <br/><br/>
          zkTube Docs - <a href="https://github.com/zkTube-Labs/zkTube-docs/tree/main/docs" rel="noopener noreferrer" target='_blank'>https://github.com/zkTube-Labs/zkTube-docs/tree/main/docs</a> <br/><br/>
          ZKSwap Docs - <a href="https://en.wiki.zks.org/" rel="noopener noreferrer" target='_blank'>https://en.wiki.zks.org/</a> <br/><br/>

        {/* <Heading level="2" style={{paddingTop:"15px"}}>
         GitHub Resources
        </Heading> */}
       
        </Paragraph>
      </div>
      </Box>
    )
  }
}
export default Resources;
