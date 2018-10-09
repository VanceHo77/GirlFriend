package com.vance.girlfriend.model.repository

import com.vance.girlfriend.model.entity.AdminUserEntity
import com.vance.girlfriend.model.entity.NewsEntity
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource
import org.springframework.web.bind.annotation.CrossOrigin

@RepositoryRestResource(path = "/news")
interface NewsRepo : PagingAndSortingRepository<NewsEntity, Long>{

    fun findTop10ByOrderByModifyTimeDesc(): List<NewsEntity>
}
