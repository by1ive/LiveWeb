X7SE备份升级命令：

status clr crc;encrypt init;encrypt cnt set 3;status set cnt 3;reset;

RMSoft1107

```
setenv serverip 192.168.1.188;
setenv ipaddr 192.168.1.173;
setenv netmask 255.255.255.0;
ping 192.168.1.188;

encrypt init;encrypt cnt set 4;
status set cnt 4;
reset;
```



mklink /D  "C:\Users\L\.vscode\extensions" "E:\vscodeExtensions"

```
mw.l 0x82000000 0xffffffff 0x100000;tftp 0x82000000 STM_UBOOT_0x11_T18121900;
sf probe 0;sf erase 0 0x60000;sf write 0x82000000 0 0x60000;

mw.l 0x82000000 0xFFFFFFFF 0x200000;tftp 0x82000000 STM_KERNEL_0x12_T22080800;
sf probe 0;sf erase 0xA0000 0x1C0000;sf write 0x82000000 0xA0000 0x1C0000;

sf probe 0;tftp 0x82000000 STM_ROOTFS_0x13_T22090800;
sf erase 0x260000 0x300000;sf write 0x82000000 0x260000 ${filesize};

tftp 0x82000000 STM_LOCAL_0x14_T23082802;
sf probe 0;sf erase 0x560000 0x400000;sf write 0x82000000 0x560000 ${filesize}


tftp 0x82000000 STM_EXTEND_0x15_T23082802;
sf probe 0; sf erase 0x960000 0x600000; sf write 0x82000000 0x960000 ${filesize};

tftp 0x82000000 STM_RESOURCE_0x16_T23082802;
sf probe 0; sf erase 0xF60000 0x600000; sf write 0x82000000 0xF60000 ${filesize};


tftp 0x82000000 STM_CUSTOMER_0x17_T23082802;
sf probe 0; sf erase 0x1560000 0x500000; sf write 0x82000000 0x1560000 ${filesize};

tftp 0x82000000 STM_PLUGIN_0x18_T23082802;
sf probe 0; sf erase 0x1A60000 0x100000; sf write 0x82000000 0x1A60000 ${filesize};

tftp 0x82000000 STM_FIRMWARE_0x19_T23082802;
sf probe 0; sf erase 0x1B60000 0x1E0000; sf write 0x82000000 0x1B60000 ${filesize};

 
```



mmcblk0boot1



- **git服务器： [http://192.168.80.129](http://192.168.80.129/)**
- 用户账号： bwli

- 用户密码： 4fluW7o&

- 

- 5mesCM2x

 pcie;sf probe 0;sf read 0x12000000 0x1E00000 0x200000;bootm 0x12000000 - 0x1f00000;







待验证的问题

X7NPROH0416网口策略任务

1、双网卡主机eth0 192.168.161.x eth1 10.100.100.x  eht1:0 192.168.1.x 环境，将P3设置为192.168.1.x时无法进行运维宝调试界面，当添加eth1:0 对于的ip gw时可以正常访问

2、
