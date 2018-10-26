package com.vance.girlfriend.model.repository

import com.vance.girlfriend.model.entity.NewsEntity
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource(path = "/news")
interface NewsRepo : PagingAndSortingRepository<NewsEntity, Long> {
}
