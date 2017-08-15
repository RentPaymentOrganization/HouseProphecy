USE [CraigsList]
GO
/****** Object:  StoredProcedure [dbo].[P_GetCityNames]    Script Date: 19.05.2017 13:52:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[P_GetBedRoomsNames]
 AS
BEGIN
	select distinct bedrooms BedRoomsName  from [OffersTable]
END