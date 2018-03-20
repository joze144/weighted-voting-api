# Setup testnet tutorial for MacOS
By [Medium article](https://medium.com/@WWWillems/how-to-set-up-a-private-ethereum-testnet-blockchain-using-geth-and-homebrew-1106a27e8e1e)

#### Install geth
```
$ brew install ethereum
```

#### Create a blockchain folder
```
$ mkdir /path/to/testnet
```

#### Create genesis file
Create file /path/to/CustomGenesis.json
```json
{
    "config": {
        "chainId": 15,
        "homesteadBlock": 0,
        "eip155Block": 0,
        "eip158Block": 0
    },
    "difficulty": "0x400",
    "gasLimit": "0x2100000",
    "alloc": {
        "93f932b3b87e08cdaf0877994e44feb4c93e81aa": 
         { "balance": "0x1337000000000000000000" }     
    }
}
```
alloc: preallocate ETH to wanted addresses
difficulty: 400 is lower than main-net, so block mining is faster

#### Start testnet
```
geth --identity "TestNode" --nodiscover --networkid 1999 --datadir /path/to/test-net-blockchain  init /path/to/CustomGenesis.json
```

#### Create account
```
geth account new --datadir /path/to/test-net-blockchain
```

#### Reset testnet
```
geth removedb --datadir /path/to/test-net-blockchain
```

#### Run IPC
```
geth --identity "TestNode" --datadir /path/to/to/test-net-blockchain --nodiscover --networkid 1999
```

#### Attach to the console
```
geth attach /path/to/geth.ipc
```
