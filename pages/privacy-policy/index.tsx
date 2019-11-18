import React from 'react';
import Grid from '@material-ui/core/Grid';
import GridContainer from '@/components/Layout/Grid/Container';
import { NextPage } from 'next';
import { useTranslation } from 'react-i18next';
import NextHead from '@/components/NextHead';
import NavHeader from '@/components/Toolbar/NavHeader';
import FooterComponent from '@/components/Layout/FooterComponent';

// @ts-ignore
const PrivacyPolicy: NextPage = (props) => {
  const { t } = useTranslation();

  return (
    <Grid className="termsAndConditions">
      <NextHead
        googleMapApiRequire={false}
        ogSitename="Westay - Đặt phòng homestay trực tuyến"
        title="Westay - Đặt phòng Homestay nhanh chóng, trải nghiệm hạng sang tại Westay"
        description="Đặt phòng homestay nhanh chóng, trải nghiệm hạng sang tại Westay cùng với nhiều ưu đãi hấp dẫn"
        url="https://westay.vn/privacy-policy"
        ogImage="/static/images/Bg_home.4023648f.jpg"></NextHead>

      <NavHeader></NavHeader>

      <GridContainer xs={9}>
        <Grid container>
          <div className="termsOfConditions">
            <h1>Chính sách quyền riêng tư</h1>
            <p dir="ltr">
              <span>
                C&ocirc;ng ty Cổ phần Westay (Số đăng k&yacute; c&ocirc;ng ty: 0108045140)
                (&ldquo;WeStay&rdquo; hoặc &ldquo;ch&uacute;ng t&ocirc;i&rdquo;) sở hữu v&agrave;
                điều h&agrave;nh trang web Westay.vn. Ch&iacute;nh S&aacute;ch Quyền Ri&ecirc;ng Tư
                n&agrave;y m&ocirc; tả c&aacute;ch thức ch&uacute;ng t&ocirc;i thu thập, sử dụng,
                tiết lộ, xử l&yacute; v&agrave; bảo vệ th&ocirc;ng tin nhận dạng c&aacute;
                nh&acirc;n (&ldquo;Dữ Liệu C&aacute; Nh&acirc;n&rdquo;) m&agrave; Qu&yacute; vị
                (&ldquo;Người d&ugrave;ng&rdquo;) c&oacute; thể cung cấp li&ecirc;n quan đến
                c&aacute;c dịch vụ của WeStay được cung cấp th&ocirc;ng qua trang web:{' '}
                <a href="www.westay.vn">www.westay.vn</a> (&ldquo;Trang Web&rdquo;). Dữ Liệu
                C&aacute; Nh&acirc;n c&oacute; nghĩa l&agrave; dữ liệu, cho d&ugrave; l&agrave;
                đ&uacute;ng hoặc kh&ocirc;ng đ&uacute;ng, về một c&aacute; nh&acirc;n c&oacute; thể
                được nhận dạng từ dữ liệu đ&oacute;, hoặc từ dữ liệu v&agrave; c&aacute;c
                th&ocirc;ng tin kh&aacute;c m&agrave; WeStay c&oacute; được hoặc c&oacute; quyền
                truy cập. C&aacute;c đề cập Trang Web được coi l&agrave; bao gồm cả c&aacute;c trang
                ph&aacute;i sinh, bao gồm nhưng kh&ocirc;ng giới hạn ở c&aacute;c trang web
                v&agrave; ứng dụng di động của Trang Web. Bằng c&aacute;ch truy cập hoặc sử dụng
                Trang Web, Qu&yacute; vị đồng &yacute; v&agrave; chấp thuận việc thu thập, sử dụng,
                tiết lộ v&agrave; xử l&yacute; Dữ Liệu C&aacute; Nh&acirc;n của Qu&yacute; vị theo
                Ch&iacute;nh S&aacute;ch Quyền Ri&ecirc;ng Tư n&agrave;y v&agrave;/hoặc Điều Khoản
                Trang Web. Nếu Qu&yacute; vị kh&ocirc;ng đồng &yacute; với Ch&iacute;nh S&aacute;ch
                Quyền Ri&ecirc;ng Tư dưới đ&acirc;y, xin vui l&ograve;ng ngay lập tức rời khỏi Trang
                Web n&agrave;y.
              </span>
            </p>
            <p dir="ltr">
              <span>
                <strong>&nbsp;</strong>
              </span>
            </p>
            <p dir="ltr">
              <span>
                T&ugrave;y từng thời điểm, WeStay c&oacute; thể sửa đổi Ch&iacute;nh S&aacute;ch
                Quyền Ri&ecirc;ng Tư để tương th&iacute;ch với những thay đổi về ph&aacute;p luật,
                c&aacute;c thực tiễn thu thập v&agrave; sử dụng Dữ Liệu C&aacute; Nh&acirc;n của
                ch&uacute;ng t&ocirc;i, c&aacute;c t&iacute;nh năng của Trang Web, hoặc những tiến
                bộ về c&ocirc;ng nghệ. Nếu ch&uacute;ng t&ocirc;i thực hiện c&aacute;c sửa đổi
                m&agrave; l&agrave;m thay đổi c&aacute;ch thức ch&uacute;ng t&ocirc;i thu thập hoặc
                sử dụng Dữ Liệu C&aacute; Nh&acirc;n của Qu&yacute; vị, th&igrave; những sửa đổi
                đ&oacute; sẽ được đăng trong Ch&iacute;nh S&aacute;ch Quyền Ri&ecirc;ng Tư
                n&agrave;y v&agrave; ng&agrave;y c&oacute; hiệu lực sẽ được n&ecirc;u ở ngay phần
                đầu của Ch&iacute;nh S&aacute;ch Quyền Ri&ecirc;ng Tư n&agrave;y. V&igrave; vậy,
                Qu&yacute; vị n&ecirc;n xem một c&aacute;ch định kỳ Ch&iacute;nh S&aacute;ch Quyền
                Ri&ecirc;ng Tư n&agrave;y để được cập nhật về c&aacute;c ch&iacute;nh s&aacute;ch
                v&agrave; thực tiễn hiện h&agrave;nh của ch&uacute;ng t&ocirc;i. WeStay cũng sẽ đăng
                nổi bật những thay đổi quan trọng như vậy trước khi &aacute;p dụng c&aacute;c thay
                đổi. Nếu Qu&yacute; vị kh&ocirc;ng đồng &yacute; với bất kỳ thay đổi hoặc sửa đổi
                n&agrave;o trong Ch&iacute;nh S&aacute;ch Quyền Ri&ecirc;ng Tư, xin vui l&ograve;ng
                kh&ocirc;ng tiếp tục sử dụng Trang Web. Qu&yacute; vị sẽ được xem như đ&atilde; đồng
                &yacute; với bất kỳ sự sửa đổi của Ch&iacute;nh S&aacute;ch Quyền Ri&ecirc;ng Tư khi
                Qu&yacute; vị sử dụng Trang Web sau ng&agrave;y c&oacute; hiệu lực của sửa đổi
                đ&oacute;.
              </span>
            </p>
            <h2 dir="ltr">
              <span>1. Th&ocirc;ng tin ch&uacute;ng t&ocirc;i thu thập</span>
            </h2>
            <p dir="ltr">
              <span>
                Ch&uacute;ng t&ocirc;i thu thập Dữ Liệu C&aacute; Nh&acirc;n về Qu&yacute; vị
                m&agrave; Qu&yacute; vị cung cấp cho ch&uacute;ng t&ocirc;i khi sử dụng Trang Web.
                Dữ Liệu C&aacute; Nh&acirc;n n&agrave;y bao gồm nhưng kh&ocirc;ng giới hạn ở
                t&ecirc;n, th&ocirc;ng tin nhận dạng Người D&ugrave;ng WeStay v&agrave; th&ocirc;ng
                tin đăng nhập, địa chỉ, số điện thoại, địa chỉ email, t&ecirc;n kh&aacute;ch sạn, vị
                tr&iacute; kh&aacute;ch sạn v&agrave;/hoặc thời gian lưu tr&uacute; của Qu&yacute;
                vị. Ch&uacute;ng t&ocirc;i c&oacute; thể y&ecirc;u cầu Qu&yacute; vị cung cấp
                th&ocirc;ng tin về sở th&iacute;ch du lịch của Qu&yacute; vị, h&atilde;ng
                h&agrave;ng kh&ocirc;ng sử dụng thường xuy&ecirc;n, v&agrave; phản hồi về những trải
                nghiệm du lịch của Qu&yacute; vị th&ocirc;ng qua việc đặt chỗ của Qu&yacute; vị
                tr&ecirc;n WeStay. Ch&uacute;ng t&ocirc;i cũng thu thập th&ocirc;ng tin kh&ocirc;ng
                nhận dạng c&aacute; nh&acirc;n (th&ocirc;ng tin kh&ocirc;ng thể sử dụng để nhận dạng
                Qu&yacute; vị), bao gồm nhưng kh&ocirc;ng giới hạn ở địa chỉ IP, dữ liệu về vị
                tr&iacute; địa l&yacute;, loại hệ điều h&agrave;nh, quốc tịch, ưu ti&ecirc;n
                t&igrave;m kiếm, cũng như dữ liệu li&ecirc;n quan đến việc sử dụng Internet
                n&oacute;i chung.
              </span>
            </p>
            <h2 dir="ltr">
              <span>
                2. Ch&uacute;ng t&ocirc;i sử dụng Th&ocirc;ng tin của Qu&yacute; vị như thế
                n&agrave;o
              </span>
            </h2>
            <p dir="ltr">
              <span>
                Ch&uacute;ng t&ocirc;i c&oacute; thể sử dụng Dữ Liệu C&aacute; Nh&acirc;n của
                Qu&yacute; vị v&agrave; c&aacute;c th&ocirc;ng tin kh&aacute;c thu thập qua Trang
                Web, cho c&aacute;c mục đ&iacute;ch sau: đăng k&yacute;, quản l&yacute;
                v&agrave;/hoặc quản trị việc Qu&yacute; vị sử dụng v&agrave;/hoặc truy cập Trang
                Web; quản l&yacute;, điều h&agrave;nh, quản trị v&agrave; cung cấp cho Qu&yacute; vị
                c&aacute;c dịch vụ được đề nghị tr&ecirc;n Trang Web; để li&ecirc;n hệ với
                Qu&yacute; vị về những vấn đề li&ecirc;n quan đến việc Qu&yacute; vị sử dụng
                v&agrave;/hoặc truy cập Trang Web v&agrave; c&aacute;c dịch vụ tr&ecirc;n Trang Web,
                v&agrave; bất cứ c&acirc;u hỏi v&agrave;/hoặc thắc mắc n&agrave;o m&agrave;
                Qu&yacute; vị đưa ra th&ocirc;ng qua Trang Web hay bằng c&aacute;ch kh&aacute;c;
                t&ugrave;y chỉnh trải nghiệm của Qu&yacute; vị khi sử dụng Trang Web; đ&aacute;nh
                gi&aacute; v&agrave; cải thiện sự trải nghiệm v&agrave; sự h&agrave;i l&ograve;ng
                của kh&aacute;ch h&agrave;ng; c&ocirc;ng bố đ&aacute;nh gi&aacute; của kh&aacute;ch
                h&agrave;ng, chẳng hạn như về Trang Web, c&aacute;c Đại l&yacute; Du Lịch,
                c&aacute;c Chuyến Bay hoặc Kh&aacute;ch Sạn, ở định dạng kỹ thuật số v&agrave;/hoặc
                dạng bản in cho việc truy cập c&ocirc;ng cộng; để thực thi c&aacute;c Điều Khoản
                v&agrave; Điều Kiện của ch&uacute;ng t&ocirc;i; để giải quyết c&aacute;c tranh chấp
                hoặc khiếu nại, thu tiền hay c&aacute;c khoản ph&iacute;, hoặc khắc phục sự cố;
                v&agrave;/hoặc cho c&aacute;c mục đ&iacute;ch kh&aacute;c được th&ocirc;ng
                b&aacute;o cho Qu&yacute; vị tại thời điểm thu thập.
              </span>
            </p>
            <p dir="ltr">
              <span>
                <strong>&nbsp;</strong>
              </span>
            </p>
            <p dir="ltr">
              <span>
                Ch&uacute;ng t&ocirc;i cũng c&oacute; thể sử dụng Dữ Liệu C&aacute; Nh&acirc;n của
                Qu&yacute; vị v&agrave; c&aacute;c th&ocirc;ng tin kh&aacute;c được thu thập cho mục
                đ&iacute;ch tiếp thị qua Mạng Truyền Th&ocirc;ng Mạng X&atilde; Hội bằng c&aacute;ch
                sử dụng kỹ thuật đồ thị trực tiếp v&agrave; mở rộng (direct and open graph
                technology) v&agrave; cho c&aacute;c mục đ&iacute;ch tiếp thị kỹ thuật số v&agrave;
                phương thức truyền thống như gửi bưu phẩm trực tiếp đến Qu&yacute; vị v&agrave; đăng
                b&agrave;i về c&aacute;c sản phẩm mới, c&aacute;c ch&agrave;o b&aacute;n đặc biệt
                hoặc c&aacute;c th&ocirc;ng tin kh&aacute;c m&agrave; ch&uacute;ng t&ocirc;i cho
                rằng Qu&yacute; vị c&oacute; thể quan t&acirc;m. Xin lưu &yacute; rằng Qu&yacute; vị
                c&oacute; thể từ chối bất kỳ t&agrave;i liệu tiếp thị n&agrave;o m&agrave;
                ch&uacute;ng t&ocirc;i gửi cho Qu&yacute; vị v&agrave;o bất cứ l&uacute;c
                n&agrave;o. H&atilde;y l&agrave;m theo c&aacute;c hướng dẫn hủy bỏ đăng k&yacute;
                được n&ecirc;u trong t&agrave;i liệu tiếp thị của ch&uacute;ng t&ocirc;i nếu
                Qu&yacute; vị từ chối bất cứ t&agrave;i liệu tiếp thị n&agrave;o v&agrave;
                ch&uacute;ng t&ocirc;i sẽ t&ocirc;n trọng mong muốn của Qu&yacute; vị.
              </span>
            </p>
            <h2 dir="ltr">
              <span>
                3. Chia sẻ v&agrave; chuyển Dữ liệu C&aacute; nh&acirc;n của Qu&yacute; vị
              </span>
            </h2>
            <p dir="ltr">
              <span>
                Dữ Liệu C&aacute; Nh&acirc;n của Qu&yacute; vị sẽ/c&oacute; thể được WeStay tiết lộ
                cho c&aacute;c c&ocirc;ng ty li&ecirc;n kết của WeStay. T&ugrave;y từng thời điểm,
                WeStay (v&agrave;/hoặc c&aacute;c c&ocirc;ng ty li&ecirc;n kết của ch&uacute;ng
                t&ocirc;i) cũng c&oacute; thể tiết lộ Dữ Liệu C&aacute; Nh&acirc;n của Qu&yacute; vị
                với những nh&agrave; cung cấp, cung ứng hay đại l&yacute; dịch vụ b&ecirc;n thứ ba,
                cho một hoặc nhiều hơn c&aacute;c mục đ&iacute;ch n&ecirc;u tr&ecirc;n. Dịch vụ của
                b&ecirc;n thứ ba bao gồm nhưng kh&ocirc;ng giới hạn ở dịch vụ m&aacute;y chủ
                website, ph&acirc;n t&iacute;ch dữ liệu, tiếp thị, xử l&yacute; c&aacute;c giao dịch
                thẻ t&iacute;n dụng, v&agrave; cung cấp dịch vụ.
              </span>
            </p>
            <p dir="ltr">
              <span>
                <strong>&nbsp;</strong>
              </span>
            </p>
            <p dir="ltr">
              <span>
                Trong một số trường hợp, khi Qu&yacute; vị giao dịch trực tiếp với một b&ecirc;n thứ
                ba để tiếp nhận dịch vụ, hoặc khi Qu&yacute; vị sử dụng Trang Web để đặt
                ph&ograve;ng kh&aacute;ch sạn hoặc tiếp nhận sản phẩm hay dịch vụ kh&aacute;c,
                ch&uacute;ng t&ocirc;i c&oacute; thể cung cấp Dữ Liệu C&aacute; Nh&acirc;n của
                Qu&yacute; vị cho homestay đ&oacute; hoặc b&ecirc;n thứ ba kh&aacute;c đ&oacute;.
              </span>
            </p>
            <p dir="ltr">
              <span>
                <strong>&nbsp;</strong>
              </span>
            </p>
            <p dir="ltr">
              <span>
                T&ugrave;y thuộc v&agrave;o vị tr&iacute; của Qu&yacute; vị, WeStay, c&aacute;c
                c&ocirc;ng ty li&ecirc;n kết v&agrave; c&aacute;c nh&agrave; cung cấp, nh&agrave;
                cung ứng hoặc đại l&yacute; dịch vụ b&ecirc;n thứ ba của WeStay, cũng c&oacute; thể
                chuyển Dữ Liệu C&aacute; Nh&acirc;n của Qu&yacute; vị ra nước ngo&agrave;i.
              </span>
            </p>
            <p dir="ltr">
              <span>
                <strong>&nbsp;</strong>
              </span>
            </p>
            <p dir="ltr">
              <span>
                Xin lưu &yacute; rằng WeStay cũng c&oacute; thể tiết lộ Dữ Liệu C&aacute; Nh&acirc;n
                của Qu&yacute; vị trong c&aacute;c trường hợp sau đ&acirc;y: để đưa ra v&agrave;
                phản biện chống lại bất kỳ khiếu nại hoặc khiếu kiện n&agrave;o; để thực hiện lệnh
                của t&ograve;a &aacute;n, quy tr&igrave;nh ph&aacute;p l&yacute;, c&aacute;c
                y&ecirc;u cầu hợp ph&aacute;p, c&aacute;c lệnh hoặc y&ecirc;u cầu tương đương của
                c&aacute;c tổ chức thực thi ph&aacute;p luật hoặc c&aacute;c cơ quan c&oacute; thẩm
                quyền; để điều tra gian lận hoặc sai tr&aacute;i kh&aacute;c theo y&ecirc;u cầu hoặc
                cần thiết để tu&acirc;n thủ bất kỳ luật &aacute;p dụng, hoặc để bảo vệ lợi
                &iacute;ch hợp ph&aacute;p của ch&uacute;ng t&ocirc;i; cho người mua li&ecirc;n quan
                đến bất kỳ việc mua b&aacute;n, chuyển nhượng, hoặc chuyển giao to&agrave;n bộ hoặc
                một phần c&ocirc;ng việc kinh doanh hoặc c&ocirc;ng ty ch&uacute;ng t&ocirc;i; để
                thực thi hoặc &aacute;p dụng c&aacute;c điều khoản v&agrave; điều kiện &aacute;p
                dụng đối với c&aacute;c sản phẩm v&agrave; dịch vụ của ch&uacute;ng t&ocirc;i; để
                bảo vệ c&aacute;c quyền, t&agrave;i sản hoặc sự an to&agrave;n của Traveloka, Người
                D&ugrave;ng Trang Web, hoặc bất kỳ người n&agrave;o kh&aacute;c theo quyết định của
                Traveloka; v&agrave; trong bất kỳ t&igrave;nh huống n&agrave;o kh&aacute;c được
                ph&aacute;p luật cho ph&eacute;p.
              </span>
            </p>
            <h2 dir="ltr">
              <span>4. Chấp thuận</span>
            </h2>
            <p dir="ltr">
              <span>
                Như đ&atilde; n&ecirc;u ở tr&ecirc;n, bằng c&aacute;ch truy cập v&agrave; sử dụng
                Trang Web, hoặc bằng c&aacute;ch đặt h&agrave;ng từ Trang Web, hoặc bằng c&aacute;ch
                đăng k&yacute; hay sử dụng c&aacute;c dịch vụ tr&ecirc;n Trang Web, hoặc bằng
                c&aacute;ch nhấn v&agrave;o n&uacute;t &ldquo;X&aacute;c Nhận&rdquo; hoặc
                c&aacute;ch tương đương khi tạo một t&agrave;i khoản mới tr&ecirc;n Trang Web,
                Qu&yacute; vị: chấp thuận cho WeStay v&agrave;/hoặc c&aacute;c c&ocirc;ng ty
                li&ecirc;n kết của WeStay thu thập, sử dụng, tiết lộ v&agrave;/hoặc xử l&yacute; Dữ
                Liệu C&aacute; Nh&acirc;n của Qu&yacute; vị được đề cập ở tr&ecirc;n cho c&aacute;c
                mục đ&iacute;ch như đ&atilde; m&ocirc; tả ở tr&ecirc;n; v&agrave; chấp thuận cho
                WeStay v&agrave;/hoặc c&aacute;c c&ocirc;ng ty li&ecirc;n kết của WeStay chuyển giao
                Dữ Liệu C&aacute; Nh&acirc;n của Qu&yacute; vị cho c&aacute;c c&ocirc;ng ty
                li&ecirc;n kết của WeStay kh&aacute;c đến nơi m&agrave; c&aacute;c c&ocirc;ng ty
                đ&oacute; tọa lạc, v&agrave; đến c&aacute;c nh&agrave; cung cấp, nh&agrave; cung
                ứng, hoặc đại l&yacute; dịch vụ b&ecirc;n thứ ba của WeStay (hoặc c&aacute;c
                c&ocirc;ng ty li&ecirc;n kết của WeStay) cho c&aacute;c mục đ&iacute;ch như
                đ&atilde; m&ocirc; tả ở tr&ecirc;n.
              </span>
            </p>
            <h2 dir="ltr">
              <span>5. R&uacute;t lại chấp thuận</span>
            </h2>
            <p dir="ltr">
              <span>
                Qu&yacute; vị c&oacute; thể r&uacute;t lại sự chấp thuận của Qu&yacute; vị đối với
                việc cho ch&uacute;ng t&ocirc;i thu thập, sử dụng hoặc tiết lộ Dữ Liệu C&aacute;
                Nh&acirc;n của Qu&yacute; vị bất cứ l&uacute;c n&agrave;o, bằng c&aacute;ch gửi cho
                ch&uacute;ng t&ocirc;i th&ocirc;ng b&aacute;o hợp l&yacute;. Nếu Qu&yacute; vị muốn
                r&uacute;t lại sự chấp thuận của Qu&yacute; vị, xin vui l&ograve;ng th&ocirc;ng
                b&aacute;o cho ch&uacute;ng t&ocirc;i theo địa chỉ li&ecirc;n hệ được liệt k&ecirc;
                dưới đ&acirc;y. Ch&uacute;ng t&ocirc;i sẽ ngưng thu thập, sử dụng hoặc tiết lộ Dữ
                Liệu C&aacute; Nh&acirc;n của Qu&yacute; vị khi được th&ocirc;ng b&aacute;o, trừ khi
                luật ph&aacute;p y&ecirc;u cầu hoặc nếu ch&uacute;ng t&ocirc;i c&oacute; hoạt động
                kinh doanh hợp ph&aacute;p hoặc cho c&aacute;c mục đ&iacute;ch hợp ph&aacute;p để
                duy tr&igrave; Dữ Liệu C&aacute; Nh&acirc;n của Qu&yacute; vị. Lưu &yacute; rằng
                bằng c&aacute;ch r&uacute;t sự chấp thuận của Qu&yacute; vị đối với việc thu thập,
                sử dụng hoặc tiết lộ Dữ Liệu C&aacute; Nh&acirc;n của Qu&yacute; vị, ch&uacute;ng
                t&ocirc;i kh&ocirc;ng thể tiếp tục cung cấp cho Qu&yacute; vị c&aacute;c dịch vụ của
                ch&uacute;ng t&ocirc;i v&agrave; Qu&yacute; vị đồng &yacute; rằng ch&uacute;ng
                t&ocirc;i sẽ kh&ocirc;ng chịu tr&aacute;ch nhiệm với Qu&yacute; vị về bất kỳ tổn
                thất hoặc thiệt hại n&agrave;o ph&aacute;t sinh từ hoặc c&oacute; li&ecirc;n quan
                đến việc chấm dứt c&aacute;c dịch vụ n&agrave;y.
              </span>
            </p>
            <h2 dir="ltr">
              <span>6. Ch&iacute;nh s&aacute;ch Cookie</span>
            </h2>
            <p dir="ltr">
              <span>
                Một &ldquo;cookie&rdquo; l&agrave; một tệp nhận diện chữ v&agrave; số m&agrave;
                ch&uacute;ng t&ocirc;i chuyển đến ổ đĩa cứng hoặc thẻ nhớ của Qu&yacute; vị
                th&ocirc;ng qua tr&igrave;nh duyệt web khi Qu&yacute; vị truy cập Trang Web của
                ch&uacute;ng t&ocirc;i. N&oacute; cho ph&eacute;p hệ thống của ch&uacute;ng
                t&ocirc;i nhận ra Qu&yacute; vị khi Qu&yacute; vị truy cập trở lại Trang Web của
                ch&uacute;ng t&ocirc;i v&agrave; cải thiện dịch vụ của ch&uacute;ng t&ocirc;i cung
                cấp cho Qu&yacute; vị. C&aacute;c th&ocirc;ng tin được sử dụng để theo d&otilde;i
                việc sử dụng Trang Web bởi người truy cập v&agrave; thu thập c&aacute;c b&aacute;o
                c&aacute;o thống k&ecirc; về hoạt động Trang Web. Để biết th&ecirc;m th&ocirc;ng tin
                về cookie xin vui l&ograve;ng truy cập:{' '}
                <a href="www.aboutcookies.org">www.aboutcookies.org</a> hoặc{' '}
                <a href="www.allaboutcookies.org">www.allaboutcookies.org</a>. Cookie cũng c&oacute;
                thể được sử dụng để thu thập th&ocirc;ng tin tổng hợp về c&aacute;c khu vực
                m&agrave; Trang Web của ch&uacute;ng t&ocirc;i được truy cập thường xuy&ecirc;n
                nhất. Th&ocirc;ng tin về lưu lượng n&agrave;y c&oacute; thể được sử dụng để cải
                thiện nội dung Trang Web của ch&uacute;ng t&ocirc;i v&agrave; l&agrave;m cho việc sử
                dụng của Qu&yacute; vị dễ d&agrave;ng hơn. Nếu Qu&yacute; vị muốn từ chối cookie của
                ch&uacute;ng t&ocirc;i, Qu&yacute; vị c&oacute; thể t&ugrave;y chỉnh cấu h&igrave;nh
                tr&igrave;nh duyệt của Qu&yacute; vị. Tuy nhi&ecirc;n, một số t&iacute;nh năng Trang
                Web của ch&uacute;ng t&ocirc;i c&oacute; thể kh&ocirc;ng hoạt động nếu Qu&yacute; vị
                loại bỏ c&aacute;c tệp cookie khỏi tr&igrave;nh duyệt của Qu&yacute; vị. Nếu
                Qu&yacute; vị kh&ocirc;ng cho ph&eacute;p cookie, Qu&yacute; vị c&oacute; thể
                kh&ocirc;ng c&oacute; khả năng truy cập v&agrave;o c&aacute;c chức năng hoặc
                t&iacute;nh năng quan trọng tr&ecirc;n Trang Web n&agrave;y v&agrave; Qu&yacute; vị
                chỉ c&oacute; thể sử dụng Trang Web một c&aacute;ch hạn chế.
              </span>
            </p>
            <h2 dir="ltr">
              <span>7. Truy cập hoặc chỉnh sửa Dữ liệu C&aacute; nh&acirc;n của Qu&yacute; vị</span>
            </h2>
            <p dir="ltr">
              <span>
                Khi Qu&yacute; vị cung cấp cho ch&uacute;ng t&ocirc;i Dữ Liệu C&aacute; Nh&acirc;n
                của Qu&yacute; vị, h&atilde;y đảm bảo rằng Dữ Liệu C&aacute; Nh&acirc;n đ&oacute;
                l&agrave; ch&iacute;nh x&aacute;c v&agrave; đầy đủ. Nếu Qu&yacute; vị tin rằng bất
                kỳ th&ocirc;ng tin n&agrave;o của Qu&yacute; vị do ch&uacute;ng t&ocirc;i sở hữu
                hoặc kiểm so&aacute;t c&oacute; sai s&oacute;t hoặc thiếu s&oacute;t, xin vui
                l&ograve;ng đăng nhập v&agrave;o t&agrave;i khoản của Qu&yacute; vị tr&ecirc;n Trang
                Web v&agrave; chỉnh sửa th&ocirc;ng tin. Ngo&agrave;i ra, vui l&ograve;ng cập nhật
                Dữ Liệu C&aacute; Nh&acirc;n của Qu&yacute; vị th&ocirc;ng qua t&agrave;i khoản của
                Qu&yacute; vị một c&aacute;ch kịp thời khi c&oacute; bất kỳ thay đổi n&agrave;o.
              </span>
            </p>
            <p dir="ltr">
              <span>
                <strong>&nbsp;</strong>
              </span>
            </p>
            <p dir="ltr">
              <span>
                Nếu Qu&yacute; vị muốn chỉnh sửa lỗi hoặc thiếu s&oacute;t trong bất kỳ Dữ Liệu
                C&aacute; Nh&acirc;n n&agrave;o thuộc sở hữu hoặc kiểm so&aacute;t của ch&uacute;ng
                t&ocirc;i m&agrave; kh&ocirc;ng thể thực hiện th&ocirc;ng qua Trang Web của
                ch&uacute;ng t&ocirc;i, hoặc truy cập v&agrave;o Dữ Liệu C&aacute; Nh&acirc;n của
                Qu&yacute; vị thuộc sở hữu hoặc kiểm so&aacute;t của ch&uacute;ng t&ocirc;i, hoặc
                như được quy định theo ph&aacute;p luật hiện h&agrave;nh, xin vui l&ograve;ng gửi
                y&ecirc;u cầu của Qu&yacute; vị đến địa chỉ li&ecirc;n lạc chi tiết của ch&uacute;ng
                t&ocirc;i được liệt k&ecirc; b&ecirc;n dưới. Ch&uacute;ng t&ocirc;i c&oacute; thể
                thu một khoản ph&iacute; hợp l&yacute; cho việc truy cập v&agrave;o Dữ Liệu
                C&aacute; Nh&acirc;n, cho mục đ&iacute;ch thu hồi c&aacute;c chi ph&iacute;
                ph&aacute;t sinh tương ứng với y&ecirc;u cầu truy cập.
              </span>
            </p>
            <p dir="ltr">
              <span>
                <strong>&nbsp;</strong>
              </span>
            </p>
            <p dir="ltr">
              <span>
                Để bảo vệ sự ri&ecirc;ng tư v&agrave; an to&agrave;n của Qu&yacute; vị, ch&uacute;ng
                t&ocirc;i sẽ x&aacute;c minh danh t&iacute;nh của Qu&yacute; vị trước khi cấp quyền
                truy cập hoặc thực hiện việc sửa đổi Dữ Liệu C&aacute; Nh&acirc;n của Qu&yacute; vị.
                Ch&uacute;ng t&ocirc;i sẽ cố gắng đ&aacute;p ứng c&aacute;c y&ecirc;u cầu truy cập
                hoặc chỉnh sửa Dữ Liệu C&aacute; Nh&acirc;n của Qu&yacute; vị sớm nhất c&oacute;
                thể, trừ khi c&oacute; ngoại lệ &aacute;p dụng.
              </span>
            </p>
            <h2 dir="ltr">
              <span>8. Bảo vệ Dữ liệu C&aacute; nh&acirc;n của Qu&yacute; vị</span>
            </h2>
            <p dir="ltr">
              <span>
                Ch&uacute;ng t&ocirc;i bảo vệ Dữ Liệu C&aacute; Nh&acirc;n thuộc sở hữu hoặc kiểm
                so&aacute;t của ch&uacute;ng t&ocirc;i bằng c&aacute;ch duy tr&igrave; c&aacute;c
                biện ph&aacute;p an ninh hợp l&yacute;, bao gồm cả c&aacute;c quy tr&igrave;nh về
                vật chất, kỹ thuật v&agrave; tổ chức, để ngăn chặn việc truy cập, thu thập, sử dụng,
                tiết lộ, sao ch&eacute;p, sửa đổi, hủy bỏ một c&aacute;ch tr&aacute;i ph&eacute;p
                hoặc những rủi ro tương tự.
              </span>
            </p>
            <h2 dir="ltr">
              <span>9. Li&ecirc;n kết đến c&aacute;c trang Web kh&aacute;c</span>
            </h2>
            <p dir="ltr">
              <span>
                Trang Web của ch&uacute;ng t&ocirc;i c&oacute; thể chứa c&aacute;c li&ecirc;n kết
                đến c&aacute;c trang web được quan t&acirc;m kh&aacute;c. Tuy nhi&ecirc;n, khi
                Qu&yacute; vị đ&atilde; sử dụng c&aacute;c li&ecirc;n kết n&agrave;y để rời khỏi
                Trang Web của ch&uacute;ng t&ocirc;i, Qu&yacute; vị n&ecirc;n lưu &yacute; rằng
                ch&uacute;ng t&ocirc;i kh&ocirc;ng c&oacute; bất kỳ quyền kiểm so&aacute;t
                n&agrave;o với c&aacute;c trang web kh&aacute;c đ&oacute;. Xin lưu &yacute; rằng
                ch&uacute;ng t&ocirc;i kh&ocirc;ng chịu tr&aacute;ch nhiệm về việc thực hiện quyền
                ri&ecirc;ng tư của những trang web đ&oacute; v&agrave; khuyến c&aacute;o Qu&yacute;
                vị n&ecirc;n đọc c&aacute;c quy định về quyền ri&ecirc;ng tư của mỗi trang web
                Qu&yacute; vị truy cập, m&agrave; trang web n&agrave;y c&oacute; thu thập
                th&ocirc;ng tin c&aacute; nh&acirc;n của Qu&yacute; vị.
              </span>
            </p>
            <h2 dir="ltr">
              <span>10. Đăng k&yacute; v&agrave; Th&agrave;nh vi&ecirc;n</span>
            </h2>
            <p dir="ltr">
              <span>
                Trang Web n&agrave;y cho ph&eacute;p Qu&yacute; vị tạo một t&agrave;i khoản Người
                D&ugrave;ng bằng việc đăng k&yacute; th&agrave;nh vi&ecirc;n, dựa tr&ecirc;n
                c&aacute;c dữ liệu Qu&yacute; vị cung cấp. Bằng c&aacute;ch cung cấp c&aacute;c dữ
                liệu, đăng k&yacute; v&agrave; tạo t&agrave;i khoản, Qu&yacute; vị phải đảm bảo
                rằng:
              </span>
            </p>
            <ul>
              <li dir="ltr" style={{ listStyleType: 'disc' }}>
                <p dir="ltr">
                  <span>Qu&yacute; vị đ&atilde; bằng hoặc tr&ecirc;n 18 tuổi.</span>
                </p>
              </li>
              <li dir="ltr" style={{ listStyleType: 'disc' }}>
                <p dir="ltr">
                  <span>
                    Th&ocirc;ng tin về Qu&yacute; vị l&agrave; đ&uacute;ng v&agrave; ch&iacute;nh
                    x&aacute;c, hiện thời v&agrave; đầy đủ theo y&ecirc;u cầu trong mẫu đăng
                    k&yacute; tr&ecirc;n Trang Web (&ldquo;Dữ Liệu Đăng K&yacute;&rdquo;).
                  </span>
                </p>
              </li>
              <li dir="ltr" style={{ listStyleType: 'disc' }}>
                <p dir="ltr">
                  <span>
                    Qu&yacute; vị sẽ cập nhật Dữ Liệu Đăng K&yacute; n&agrave;y để bảo đảm Dữ Liệu
                    Đăng K&yacute; đ&uacute;ng, ch&iacute;nh x&aacute;c v&agrave; đầy đủ.
                  </span>
                </p>
              </li>
            </ul>
            <p dir="ltr">
              <span>
                Hơn nữa, Qu&yacute; vị đồng &yacute; rằng WeStay kh&ocirc;ng chịu tr&aacute;ch nhiệm
                đối với bất kỳ tổn thất hoặc thiệt hại m&agrave; ch&uacute;ng t&ocirc;i, Qu&yacute;
                vị hay bất kỳ b&ecirc;n thứ ba n&agrave;o phải g&aacute;nh chịu trong trường hợp sự
                tổn thất hoặc thiệt hại đ&oacute; l&agrave; do th&ocirc;ng tin kh&ocirc;ng
                ch&iacute;nh x&aacute;c hoặc kh&ocirc;ng đầy đủ m&agrave; Qu&yacute; vị cung cấp.
                Sau khi đăng k&yacute;, Qu&yacute; vị sẽ nhận được một mật khẩu v&agrave;
                th&ocirc;ng tin nhận dạng Người D&ugrave;ng (&ldquo;T&ecirc;n Đăng Nhập&rdquo;).
                Qu&yacute; vị sẽ chịu tr&aacute;ch nhiệm cho việc duy tr&igrave; t&iacute;nh bảo mật
                của mật khẩu v&agrave; T&ecirc;n Đăng Nhập, v&agrave; Qu&yacute; vị ho&agrave;n
                to&agrave;n chịu tr&aacute;ch nhiệm cho tất cả c&aacute;c hoạt động li&ecirc;n quan
                đến T&ecirc;n Đăng Nhập hoặc mật khẩu. Qu&yacute; vị chỉ c&oacute; thể sử dụng một
                T&ecirc;n Đăng Nhập v&agrave; mật khẩu tại một thời điểm v&agrave; kh&ocirc;ng được
                ph&eacute;p sử dụng nhiều hơn một T&ecirc;n Đăng Nhập. Mật khẩu của Qu&yacute; vị bị
                hạn chế nghi&ecirc;m ngặt chỉ cho việc sử dụng c&aacute; nh&acirc;n của ch&iacute;nh
                Qu&yacute; vị, v&agrave; Qu&yacute; vị phải đồng &yacute; giữ mật khẩu của
                Qu&yacute; vị ho&agrave;n to&agrave;n b&iacute; mật. Qu&yacute; vị đồng &yacute;
                th&ocirc;ng b&aacute;o ngay lập tức cho WeStay về việc sử dụng tr&aacute;i
                ph&eacute;p mật khẩu hoặc t&agrave;i khoản của Qu&yacute; vị hoặc bất kỳ sự vi phạm
                về an ninh n&agrave;o. Để bảo mật tốt hơn, h&atilde;y đảm bảo rằng Qu&yacute; vị
                đăng xuất hoặc tho&aacute;t khỏi t&agrave;i khoản của Qu&yacute; vị sau mỗi lần sử
                dụng Trang Web n&agrave;y. Qu&yacute; vị phải đồng &yacute; rằng WeStay sẽ
                kh&ocirc;ng chịu tr&aacute;ch nhiệm cho bất kỳ tổn thất hoặc thiệt hại n&agrave;o
                m&agrave; ch&uacute;ng t&ocirc;i, Qu&yacute; vị hoặc c&aacute;c b&ecirc;n thứ ba
                phải g&aacute;nh chịu ph&aacute;t sinh từ việc Qu&yacute; vị kh&ocirc;ng tu&acirc;n
                thủ c&aacute;c điều khoản n&agrave;y.
              </span>
            </p>
            <h2 dir="ltr">
              <span>11. Chuyển giao c&ocirc;ng việc Kinh doanh</span>
            </h2>
            <p dir="ltr">
              <span>
                Trong trường hợp c&oacute; thay đổi về kiểm so&aacute;t hay thay đổi quyền sở hữu
                của tất cả hay một phần c&ocirc;ng việc kinh doanh hoặc c&ocirc;ng ty của WeStay,
                bao gồm cả Trang Web, th&igrave; tất cả c&aacute;c Dữ Liệu C&aacute; Nh&acirc;n của
                Người D&ugrave;ng c&oacute; thể/sẽ l&agrave; một phần của việc chuyển giao
                t&agrave;i sản đ&oacute;.
              </span>
            </p>
            <h2 dir="ltr">
              <span>
                12. Ph&ecirc; duyệt c&aacute;c thay đổi của Ch&iacute;nh s&aacute;ch Quyền
                ri&ecirc;ng tư
              </span>
            </h2>
            <p dir="ltr">
              <span>
                Bằng c&aacute;ch sử dụng Trang Web hoặc c&aacute;c dịch vụ ch&uacute;ng t&ocirc;i
                cung cấp, Qu&yacute; vị đồng &yacute; với việc thu thập, sử dụng, tiết lộ v&agrave;
                xử l&yacute; c&aacute;c Dữ Liệu C&aacute; Nh&acirc;n của Qu&yacute; vị như được quy
                định trong Ch&iacute;nh S&aacute;ch Quyền Ri&ecirc;ng Tư n&agrave;y. Hơn nữa, nếu
                Qu&yacute; vị sử dụng dịch vụ của ch&uacute;ng t&ocirc;i, ch&uacute;ng t&ocirc;i bảo
                lưu quyền thu thập, sử dụng, tiết lộ v&agrave; xử l&yacute; Dữ Liệu C&aacute;
                Nh&acirc;n của Qu&yacute; vị theo Ch&iacute;nh S&aacute;ch Quyền Ri&ecirc;ng Tư
                n&agrave;y. T&ugrave;y từng thời điểm, Traveloka c&oacute; thể thay đổi Ch&iacute;nh
                S&aacute;ch Quyền Ri&ecirc;ng Tư n&agrave;y. Như đ&atilde; m&ocirc; tả trong phần
                đầu của Ch&iacute;nh S&aacute;ch Quyền Ri&ecirc;ng Tư n&agrave;y, ch&uacute;ng
                t&ocirc;i sẽ hiển thị những thay đổi như vậy tr&ecirc;n Trang Web n&agrave;y để
                th&ocirc;ng b&aacute;o cho Qu&yacute; vị.
              </span>
            </p>
            <h2 dir="ltr">
              <span>13. Thứ tự Ưu ti&ecirc;n</span>
            </h2>
            <p dir="ltr">
              <span>
                Nếu Qu&yacute; vị đ&atilde; đồng &yacute; với Điều Khoản Trang Web của ch&uacute;ng
                t&ocirc;i, trong trường hợp c&oacute; sự kh&ocirc;ng thống nhất giữa c&aacute;c Điều
                Khoản Trang Web v&agrave; Ch&iacute;nh S&aacute;ch Quyền Ri&ecirc;ng Tư n&agrave;y,
                Điều Khoản Trang Web sẽ được ưu ti&ecirc;n &aacute;p dụng.
              </span>
            </p>
            <h2 dir="ltr">
              <span>14. Li&ecirc;n hệ với ch&uacute;ng t&ocirc;i</span>
            </h2>
            <p dir="ltr">
              <span>
                Nếu Qu&yacute; vị c&oacute; bất kỳ c&acirc;u hỏi hoặc y&ecirc;u cầu li&ecirc;n quan
                đến Ch&iacute;nh S&aacute;ch Quyền Ri&ecirc;ng Tư, xin vui l&ograve;ng li&ecirc;n hệ
                SĐT 093 610 8880.
              </span>
            </p>
            <p dir="ltr">
              <span>
                <strong>&nbsp;</strong>
              </span>
            </p>
            <p dir="ltr">
              <span>Ng&agrave;y hiệu lực: Th&aacute;ng 3 năm 2019.</span>
            </p>
            <p dir="ltr">
              <span>
                <strong>&nbsp;</strong>
              </span>
            </p>
            <p dir="ltr">
              <span>&copy; 2019 WeStay.</span>
            </p>
            <p dir="ltr">
              <span>
                <strong>
                  <br />
                </strong>{' '}
              </span>
            </p>
            <p>&nbsp;</p>
          </div>
        </Grid>
      </GridContainer>
      <FooterComponent></FooterComponent>
    </Grid>
  );
};

export default PrivacyPolicy;
