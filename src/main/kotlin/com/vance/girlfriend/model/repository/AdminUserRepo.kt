package com.vance.girlfriend.model.repository

import com.vance.girlfriend.model.entity.AdminUserEntity
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource(path = "/adminUser")
interface AdminUserRepo : PagingAndSortingRepository<AdminUserEntity, Long> 
