RESTORE DATABASE [Bloomrunner] FROM DISK = '/tmp/BloomRunner.bak'
WITH FILE = 1,

MOVE 'BloomRunner' TO '/var/opt/mssql/data/BloomRunner.mdf',
MOVE 'BloomRunner_log' TO '/var/opt/mssql/data/BloomRunner.ldf',

NOUNLOAD, REPLACE, STATS =5
GO
