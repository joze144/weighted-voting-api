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
Create genesis file
```
$ nano /path/to/CustomGenesis.json
 ```
 
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


# Use Ropsten

#### Clear current testnet db
```
$ geth --testnet removedb
```

#### Fast sync with ropsten 
```
geth --testnet --fast --bootnodes "enode://20c9ad97c081d63397d7b685a412227a40e23c8bdc6688c6f37e97cfbc22d2b4d1db1510d8f61e6a8866ad7f0e17c02b14182d37ea7c3c8b9c2683aeb6b733a1@52.169.14.227:30303,enode://6ce05930c72abc632c58e2e4324f7c7ea478cec0ed4fa2528982cf34483094e9cbc9216e7aa349691242576d552a2a56aaeae426c5303ded677ce455ba1acd9d@13.84.180.240:30303"
```

#### Syncing once testnet already uses ropsten genesis
```
geth --datadir /path/to/testnet/data --networkid=3 –-syncmode=fast –-cache=1024 console
```
