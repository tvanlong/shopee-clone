import { useQuery } from '@tanstack/react-query'
import AsideFilter from './components/AsideFilter'
import Product from './components/Product'
import SortProductList from './components/SortProductList'
import productApi from 'src/apis/product.api'
import Pagination from 'src/components/Pagination'
import { ProductListConfig } from 'src/types/product.type'
import categoryApi from 'src/apis/category.api'
import { useEffect, useState } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import path from 'src/constants/path'
import useQueryConfig from 'src/hooks/useQueryConfig'
import { Helmet } from 'react-helmet-async'

function ProductList() {
  const queryConfig = useQueryConfig()
  const navigate = useNavigate()
  const [isEmptyProductArray, setIsEmptyProductArray] = useState<boolean>(false)

  const { data: productsData } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => {
      return productApi.getProducts(queryConfig as ProductListConfig)
    },
    staleTime: 3 * 60 * 1000,
    keepPreviousData: true
  })

  // Kiểm tra nếu productsData.data.data.products là product: [] thì sẽ gọi lại page = 1 và các params khác giữ nguyên
  useEffect(() => {
    if (productsData) {
      setIsEmptyProductArray(productsData.data.data.products.length === 0)
    }
  }, [productsData])

  useEffect(() => {
    if (isEmptyProductArray) {
      navigate({
        pathname: path.home,
        search: createSearchParams({
          ...queryConfig,
          page: '1'
        }).toString()
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEmptyProductArray])

  const { data: categoriesData } = useQuery({
    queryKey: ['categories'],
    queryFn: () => {
      return categoryApi.getProducts()
    }
  })

  return (
    <div className='bg-[#f5f5f5] py-6'>
      <Helmet>
        <title>Mua sắm Online | Shopee Việt Nam</title>
        <meta name='description' content='Mua sắm sản phẩm Online' />
      </Helmet>
      <div className='container'>
        {productsData && (
          <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-3'>
              <AsideFilter queryConfig={queryConfig} categories={categoriesData?.data.data || []} />
            </div>
            <div className='col-span-9'>
              <SortProductList queryConfig={queryConfig} pageSize={productsData.data.data.pagination.page_size} />
              <div className='mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3'>
                {productsData.data.data.products.map((product) => (
                  <div className='col-span-1' key={product._id}>
                    <Product product={product} />
                  </div>
                ))}
              </div>
              <Pagination queryConfig={queryConfig} pageSize={productsData.data.data.pagination.page_size} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductList
